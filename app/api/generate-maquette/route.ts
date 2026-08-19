import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not defined in .env.local");
    }

    const { projectType, primaryColor, requirementDetails } = await req.json();

    const isDashboard = projectType.toLowerCase().includes('dashboard') || projectType.toLowerCase().includes('erp');

    const prompt = `
      You are an elite UI/UX Systems Architect inspired by Uizard and Forest Admin Design Systems.
      Generate a JSON architecture layout spec for a client requesting a ${projectType}.
      
      Client Needs: ${requirementDetails || 'Modern sleek data-driven interface'}
      Requested Primary Color Accent: ${primaryColor || '#10b981'}

      If Project Type is Dashboard/ERP, use layoutType: "dashboard" and provide sidebarItems and widgets (stat-card, recent-activity, chart).
      If Project Type is E-commerce, use layoutType: "ecommerce" and provide topNavItems, a heroBanner (title, subtitle), and products (array of {name, price}).
      If Project Type is SaaS/Vitrine/Real Estate or anything else, use layoutType: "landing" and provide navItems, a hero (title, subtitle), and features (array of {title, description}).

      Return ONLY a raw valid JSON (no markdown):
      {
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
    const maquette = JSON.parse(data.choices[0].message.content);

    return NextResponse.json({ success: true, maquette });
  } catch (error: any) {
    console.error('Error generating maquette:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
