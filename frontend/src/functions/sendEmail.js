// functions/sendEmail.js
import emailjs from "@emailjs/browser";

export async function handler(event) {
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name: "Test", email: "test@example.com", message: "Hello" },
      process.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ success: false }) };
  }
}
