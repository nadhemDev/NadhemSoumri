import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not defined in .env.local");
    }

    const { projectType, primaryColor, requirementDetails } = await req.json();

    const isDashboard = projectType.toLowerCase().includes('dashboard') || projectType.toLowerCase().includes('erp');

    const prompt = `
      You are an elite UI/UX Systems Architect.
      Generate 4 distinct design variations (different themes, vibes, and layouts) for a client requesting a: ${projectType}.
      
      Client Needs: ${requirementDetails || 'Modern sleek data-driven interface'}
      Requested Primary Color Accent: ${primaryColor || '#10b981'} (Use this as a base, but you can alter it per variation for unique vibes).

      For EACH of the 4 variations, assign a layoutType ("dashboard", "ecommerce", or "landing").
      If "dashboard", provide sidebarItems and widgets.
      If "ecommerce", provide topNavItems, a heroBanner (title, subtitle), and products (array of {name, price}).
      If "landing", provide navItems, a hero (title, subtitle), and features (array of {title, description}).

      Return ONLY a raw valid JSON (no markdown) containing an array of exactly 4 objects:
      {
        "variations": [
          {
            "variationName": "e.g. Minimalist Glass",
            "projectType": "${projectType}",
            "layoutType": "dashboard | ecommerce | landing",
            "designSystem": {
              "glassmorphism": true,
              "borderRadius": "rounded-2xl",
              "fontStyle": "font-sans",
              "cardBg": "bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20"
            },
            "theme": {
              "primaryColor": "${primaryColor || '#10b981'}",
              "bgStyle": "bg-slate-950 text-slate-100",
              "secondaryBg": "bg-slate-900"
            },
            "layout": {
              "topBarTitle": "Project Name",
              "sidebarItems": ["if dashboard"],
              "widgets": [{"title": "if dashboard", "value": "..."}],
              "topNavItems": ["if ecommerce"],
              "heroBanner": {"title": "if ecommerce/landing", "subtitle": "..."},
              "products": [{"name": "if ecommerce", "price": "$99"}],
              "features": [{"title": "if landing", "description": "..."}]
            },
            "techStack": ["Next.js 14", "Tailwind CSS"],
            "estimatedPrice": "$1,200 - $2,800",
            "deliveryTime": "10-14 Days"
          }
        ]
      }
    `;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Groq API responded with status: ${res.status} - ${errorText}`);
    }

    const data = await res.json();
    let result = JSON.parse(data.choices[0].message.content);
    
    // In case the LLM returned { variations: [...] } directly or just an array
    const maquettes = Array.isArray(result) ? result : result.variations || [result];

    return NextResponse.json({ success: true, maquettes });
  } catch (error: any) {
    console.error('Error generating maquette:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
