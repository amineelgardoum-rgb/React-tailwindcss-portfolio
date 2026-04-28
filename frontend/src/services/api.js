const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const askChatbot = async (query) => {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(`${API_URL}/ask?query=${encodedQuery}`);

  if (!response.ok) {
    throw new Error(`Network error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.answer;
};