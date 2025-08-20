import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, projectType, message, source, recaptchaToken } = await req.json();

    if (!name || !email || !message || !projectType) {
      return NextResponse.json(
        { error: "Los campos nombre, email, tipo de proyecto y mensaje son obligatorios" },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA si el token está presente
    if (recaptchaToken) {
      try {
        const recaptchaResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          {
            method: 'POST',
          }
        );

        const recaptchaData = await recaptchaResponse.json();

        // Verificar si reCAPTCHA es válido y el score es bueno (>=0.5)
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
          console.log('reCAPTCHA verification failed:', {
            success: recaptchaData.success,
            score: recaptchaData.score,
            errors: recaptchaData['error-codes']
          });
          
          return NextResponse.json(
            { error: 'reCAPTCHA verification failed' },
            { status: 400 }
          );
        }

        console.log('reCAPTCHA verification successful:', {
          score: recaptchaData.score,
          action: recaptchaData.action
        });
      } catch (recaptchaError) {
        console.error('Error verifying reCAPTCHA:', recaptchaError);
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    } else {
      // Si no hay token de reCAPTCHA, rechazar la solicitud
      return NextResponse.json(
        { error: 'reCAPTCHA token missing' },
        { status: 400 }
      );
    }

    // Mapear los tipos de proyecto para el email
    const projectTypeLabels: { [key: string]: string } = {
      video: "Producción de Video",
      event: "Eventos",
      photography: "Fotografía",
      reels: "Reels",
      other: "Otro"
    };

    const projectTypeLabel = projectTypeLabels[projectType] || projectType;

    const response = await resend.emails.send({
      from: "Agencia Tinta <nopreply@info.agenciatinta.com>",
      to: "agenciadigitaltinta@gmail.com",
      subject: `Nuevo lead de Landing - ${projectTypeLabel} - ${name}`,
      replyTo: email,
      text: `Nuevo contacto desde Landing de Producción:

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Tipo de Proyecto: ${projectTypeLabel}
Fuente: ${source || 'landing'}

Mensaje:
${message}`,
      html: `
        <h2>Nuevo contacto desde Landing de Producción</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectTypeLabel}</p>
        <p><strong>Fuente:</strong> ${source || 'landing'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
} 