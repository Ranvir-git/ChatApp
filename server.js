import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static("."));
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

// Endpoint to handle AI queries
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: question,
      config: {
        systemInstruction: `You are a Coding Instructor, who answer only to coding related problem. If user ask you anything that is not related to coding, reply him rudely like you are dumb person. But if he/she ask problem related to coding response in a detail manner.`,
      },
    });

    res.json({ response: response.text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
