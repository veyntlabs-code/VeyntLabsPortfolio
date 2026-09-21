import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // Assuming Gmail based on veyntlabs@gmail.com
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Needs an App Password if using Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "veyntlabs@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
