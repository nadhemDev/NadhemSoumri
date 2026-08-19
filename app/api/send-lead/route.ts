import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { clientInfo, maquette } = await req.json();

    const emailHtml = `
      <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #10b981;">Nouveau Lead : ${maquette?.projectType || 'Projet'}</h2>
        <p><strong>Nom du client:</strong> ${clientInfo?.name}</p>
        <p><strong>Contact:</strong> ${clientInfo?.contact}</p>
        
        <hr style="border-top: 1px solid #eaeaea; margin: 20px 0;" />
        
        <h3 style="color: #333;">Détails de la Maquette Générée</h3>
        <p><strong>Type:</strong> ${maquette?.projectType}</p>
        <p><strong>Couleur Accent:</strong> ${maquette?.theme?.primaryColor}</p>
        <p><strong>Estimation:</strong> ${maquette?.estimatedPrice}</p>
        <p><strong>Délai:</strong> ${maquette?.deliveryTime}</p>
        
        <h4>Stack Technique:</h4>
        <ul>
          ${maquette?.techStack?.map((tech: string) => `<li>${tech}</li>`).join('') || ''}
        </ul>
        
        <h4>Widgets / Sections:</h4>
        <ul>
          ${maquette?.layout?.widgets?.map((w: any) => `<li>${w.title} (${w.type})</li>`).join('') || ''}
        </ul>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>', // You might need a verified domain in production, onboarding@resend.dev works for testing to your verified email
        to: [process.env.LEAD_RECEIVER_EMAIL || 'nadhemsoumri2@gmail.com'],
        subject: `Nouveau Projet: ${clientInfo?.name} - ${maquette?.projectType || 'Maquette'}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
       const errorData = await res.text();
       throw new Error(`Resend API Error: ${errorData}`);
    }

    const data = await res.json();

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending lead:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
