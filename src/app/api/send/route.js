// src/app/api/send/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();

  // Setup nodemailer and send email here
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use "gmail" for Gmail
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email address for sending
    to: process.env.EMAIL_USER, // Your email to receive messages
    subject: data.subject,
    text: data.message,
    replyTo: data.email, // Specify the "reply-to" address
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
