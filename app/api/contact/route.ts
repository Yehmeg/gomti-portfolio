import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "gomtikumari26@gmail.com";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ error: "Name must be 100 characters or less" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (email.length > 254) {
      return NextResponse.json({ error: "Email must be 254 characters or less" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message must be 5000 characters or less" }, { status: 400 });
    }

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();

    const resend = getResendClient();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact — ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111827; border-bottom: 2px solid #22d3ee; padding-bottom: 12px;">New Portfolio Contact</h2>
          <div style="margin: 24px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
          </div>
          <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin-top: 16px;">
            <p style="margin: 0 0 8px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}