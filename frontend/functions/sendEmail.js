// functions/sendEmail.js
const fetch = require('node-fetch'); // if your Node version < 18
// Node >= 18 has fetch built-in, so you can omit this line

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";
  
  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.VITE_EMAILJS_PUBLIC_KEY,
    template_params: { name, email, message }
  };

  try {
    const response = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS API Error:", response.status, errorText);
      throw new Error(`EmailJS API failed with status: ${response.status}`);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Serverless Function Runtime Error:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
};
