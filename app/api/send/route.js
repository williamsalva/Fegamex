import { Resend } from "resend";
import { EmailTemplate } from "../../../components/template/email.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, email, phone, city, message } = body;
    console.log("🚀 ~ POST ~ email, name :", email, name);

    const { data, error } = await resend.emails.send({
      from: "hola@fegamex.com",
      to: "fergarcia5654@gmail.com",
      subject: "¡Tienes un nuevo mensaje en tu pagina Fegamex.com!",
      react: EmailTemplate({ name, email, phone, city, message }),
    });
    console.log("🚀 ~ POST ~ data:", data);

    if (error) {
      return Response.json({ error });
    }

    return Response.json({
      data,
      message: "Mensaje enviado correctamente",
      status: 201,
    });
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return Response.json({ error });
  }
}
