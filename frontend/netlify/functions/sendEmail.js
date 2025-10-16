// functions/sendEmail.js
// No import needed for fetch in modern Node environments
// If using an older Node environment, you might need to 'npm install node-fetch' and 'import fetch from "node-fetch";'
import fetch from 'node-fetch'; // ❗ ADD THIS IMPORT LINE
export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Direct API call configuration
  const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";
  
  const payload = {
    // These values are required for the direct API call
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.VITE_EMAILJS_PUBLIC_KEY, // The Public Key is used as user_id
    template_params: { name, email, message }
  };

  try {
    const response = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
        // Log the full error response text for debugging
        const errorText = await response.text(); 
        console.error("EmailJS API Error:", response.status, errorText);
        // Throw an error that will be caught below and returned as a 500
        throw new Error(`EmailJS API failed with status: ${response.status}`);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Serverless Function Runtime Error:", err);
    return { statusCode: 500, body: JSON.stringify({ success: false, error: err.message }) };
  }
}