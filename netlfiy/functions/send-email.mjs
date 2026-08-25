import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json(
      { error: "Method not allowed" },
      { status: 405 },
    );
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["dalmeidasarah2@gmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}

Email: ${email}

Message:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send message." },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
};