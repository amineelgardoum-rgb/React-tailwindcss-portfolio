// src/services/api.js

const isDocker = window.location.hostname !== "localhost";

// In production, you might want to use environment variables
const API_URL = import.meta.env.VITE_API_URL || (isDocker ? "http://portfolio-backend:8000" : "http://localhost:8000");

/**
 * Sends a message to the chatbot backend and returns the response.
 * @param {string} query - The user's input query.
 * @returns {Promise<string>} - The chatbot's answer.
 */
export const askChatbot = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(`${API_URL}/ask?query=${encodedQuery}`);

  if (!response.ok) {
    throw new Error(`Network error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.answer;
};
