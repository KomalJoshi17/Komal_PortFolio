import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("FORM DATA:", name, email, message);
    console.log("API KEY:", process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "moudgillkomal6@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}