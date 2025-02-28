import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Agencia Tinta <nopreply@info.agenciatinta.com>",
      to: "agenciadigitaltinta@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,
      text: `Nuevo contacto ${name}:\n\n Email: ${email}\n\n Mensaje: ${message}`,
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
