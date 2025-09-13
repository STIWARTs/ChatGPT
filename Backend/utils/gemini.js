import "dotenv/config";

// Uses Google Generative Language API (Gemini 1.5 Flash) via REST
// Expects env var: GOOGLE_API_KEY
const getGeminiAPIResponse = async (message) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("Missing GEMINI_API_KEY environment variable");
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: message }]
        }
      ]
    })
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API error response:", errorText);
        throw new Error(`Gemini API error ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    console.log("Gemini API response:", JSON.stringify(data, null, 2));
    
    // Check if there are candidates and if they have content
    if (!data.candidates || data.candidates.length === 0) {
        console.error("No candidates in response:", data);
        return "I'm sorry, I couldn't generate a response. Please try again.";
    }
    
    const candidate = data.candidates[0];
    if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
        console.error("No content parts in candidate:", candidate);
        return "I'm sorry, I couldn't generate a response. Please try again.";
    }
    
    const text = candidate.content.parts[0].text || "";
    console.log("Extracted text:", text);
    return text;
  } catch (err) {
  console.error("Error in getGeminiAPIResponse:", err.message);
  throw err;
  }
};

export default getGeminiAPIResponse;