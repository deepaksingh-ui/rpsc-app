import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const API_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2
].filter(Boolean);

let currentKeyIndex = 0;

// Helper: Call Gemini API with key rotation
async function callGemini(prompt) {
  if (API_KEYS.length === 0) {
    throw new Error("Gemini API Keys missing in .env file");
  }

  let data;
  let attempts = 0;

  while (attempts < API_KEYS.length) {
    const apiKey = API_KEYS[currentKeyIndex];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    data = await response.json();

    if (data.error) {
      console.error(`API key ${currentKeyIndex + 1} failed:`, data.error.message);
      currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
      attempts++;
    } else {
      return data.candidates[0].content.parts[0].text;
    }
  }

  throw new Error(data?.error?.message || "All API keys failed.");
}

// ===== NOTES ENDPOINT =====
app.post("/api/notes", async (req, res) => {
  try {
    const { topic, language } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const lang = language || "Hinglish";

    const prompt = `You are an expert RPSC (Rajasthan Public Service Commission) School Lecturer exam coach.

Topic: ${topic}
Language: ${lang}

Provide DETAILED exam-oriented notes in ${lang} language. Follow this structure:

## Topic Overview
Brief introduction of the topic and why it's important for RPSC exam.

## Detailed Explanation
Cover ALL important concepts, facts, dates, names, events, definitions thoroughly. Be very detailed - cover everything a student needs to know. Use bullet points and sub-sections.

## Key Points to Remember
List the 10-15 most important facts/points that are frequently asked in exams.

## Previous Year Pattern
Mention what kind of questions come from this topic in RPSC exams.

## Quick Revision Notes
Short bullet points for last-minute revision.

IMPORTANT:
- Respond ENTIRELY in ${lang} language.
- If ${lang} is "Hindi", use pure Hindi (Devanagari script).
- If ${lang} is "English", use pure English.
- If ${lang} is "Hinglish", use a natural mix of Hindi and English.
- Be very thorough and detailed. Students depend on these notes for exam preparation.
- Include Rajasthan-specific context wherever applicable.
- Include facts, figures, dates, names that are commonly asked.`;

    const result = await callGemini(prompt);
    res.json({ result });
  } catch (error) {
    console.error("Notes error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ===== DOUBT ENDPOINT =====
app.post("/api/doubt", async (req, res) => {
  try {
    const { topic, question, language } = req.body;
    if (!question) return res.status(400).json({ error: "Question is required" });

    const lang = language || "Hinglish";

    const prompt = `You are an expert RPSC exam tutor. A student is studying the topic "${topic}" and has a doubt.

Student's Question: ${question}
Language: ${lang}

Answer the student's question in ${lang} language. Be clear, detailed and exam-focused.
- Give a thorough answer with examples where needed.
- If relevant, mention how this could be asked in RPSC exam.
- Use bullet points for key facts.
- Keep it helpful and easy to understand.
- If the student asks for more questions/MCQs, provide them with options and answers.`;

    const result = await callGemini(prompt);
    res.json({ result });
  } catch (error) {
    console.error("Doubt error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ===== MOCK TEST ENDPOINT =====
app.post("/api/mocktest", async (req, res) => {
  try {
    const { topic, language, count } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const lang = language || "Hinglish";
    const numQuestions = Math.min(Math.max(parseInt(count) || 15, 5), 50);

    const prompt = `You are an RPSC exam question paper setter. Create a mock test.

Topic: ${topic}
Language: ${lang}

Generate EXACTLY ${numQuestions} multiple-choice questions (MCQs) for RPSC School Lecturer exam preparation.

RULES:
1. Questions should be exam-level difficulty (mix of easy, medium, hard).
2. Each question must have exactly 4 options (A, B, C, D).
3. Only ONE option should be correct.
4. Include factual, conceptual, and application-based questions.
5. Cover different aspects and sub-topics within the main topic.
6. Write everything in ${lang} language.
7. Each question must have a brief explanation of why the answer is correct.
8. Make questions varied - don't repeat similar patterns.
9. Include tricky questions that test deep understanding.

You MUST respond in this EXACT JSON format and NOTHING else (no markdown, no backticks, just pure JSON):
{
  "questions": [
    {
      "question": "Question text here?",
      "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
      "answer": "A",
      "explanation": "Brief explanation why A is correct."
    }
  ]
}

Generate exactly ${numQuestions} questions. Return ONLY valid JSON. No extra text, no markdown code blocks.`;

    const result = await callGemini(prompt);

    // Parse JSON from response (handle markdown code blocks if present)
    let jsonStr = result.trim();
    if (jsonStr.startsWith("```")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
    }

    const parsed = JSON.parse(jsonStr);
    res.json(parsed);
  } catch (error) {
    console.error("Mock test error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ===== OLD ENDPOINT (backward compatible) =====
app.post("/api/ask", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const prompt = `Explain the following topic for RPSC exam preparation. Provide detailed explanation and 5 MCQs. Topic: ${topic}`;
    const result = await callGemini(prompt);
    res.json({ result });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
