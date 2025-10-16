import emailjs from "@emailjs/browser";

export async function handler(event) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body); // Read form data

  try {
    // The keys are accessed via process.env and will NOT be exposed publicly.
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, email, message }, // Use the received form data
      process.env.VITE_EMAILJS_PUBLIC_KEY // Public key is acceptable here
    );

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Serverless EmailJS Error:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
}