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

// Server-side cache for API responses
const serverCache = {};

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
    const cacheKey = `notes_${topic}_${lang}`;

    // Return cached response if available
    if (serverCache[cacheKey]) {
      return res.json({ result: serverCache[cacheKey] });
    }

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
    serverCache[cacheKey] = result;
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

// ===== TOPIC IMAGES ENDPOINT =====
app.post("/api/topic-image", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const cacheKey = `img_${topic}`;
    if (serverCache[cacheKey]) {
      return res.json(serverCache[cacheKey]);
    }

    // Ask Gemini for important image keywords with captions that help remember
    const keywordPrompt = `Topic: "${topic}" (RPSC exam, India/Rajasthan context)

Give me exactly 6 important visual things a student MUST see to understand and remember this topic. For each, give:
- "keyword": English Wikipedia article name (exact page title) for finding the image
- "caption": Short Hindi/Hinglish caption (1 line) explaining WHY this image is important for the topic
- "importance": Why seeing this image helps remember the topic

Return ONLY a JSON array, nothing else:
[{"keyword":"Maharana Pratap","caption":"महाराणा प्रताप - मेवाड़ के वीर योद्धा जिन्होंने अकबर से लोहा लिया","importance":"Helps visualize the key historical figure"}]`;

    let keywords = [];
    try {
      const keyResult = await callGemini(keywordPrompt);
      let jsonStr = keyResult.trim();
      if (jsonStr.startsWith("```")) {
        jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
      }
      keywords = JSON.parse(jsonStr);
    } catch(e) {
      keywords = topic.split(/[-–,]/).map(s => ({ keyword: s.trim(), caption: s.trim(), importance: "" })).filter(k => k.keyword).slice(0, 4);
    }

    // Search Wikipedia + Wikimedia Commons for high quality images
    const images = [];
    for (const item of keywords) {
      if (images.length >= 6) break;
      try {
        const searchQuery = encodeURIComponent(item.keyword.trim());

        // Try Wikipedia summary first (has curated main images)
        const wikiRes = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${searchQuery}`,
          { headers: { "User-Agent": "RPSCApp/1.0" } }
        );
        const wikiData = await wikiRes.json();

        let imgUrl = null;
        // Prefer originalimage for better quality, fallback to thumbnail
        if (wikiData.originalimage && wikiData.originalimage.source) {
          imgUrl = wikiData.originalimage.source;
        } else if (wikiData.thumbnail && wikiData.thumbnail.source) {
          imgUrl = wikiData.thumbnail.source.replace(/\/\d+px-/, '/800px-');
        }

        if (!imgUrl) {
          // Try Wikimedia Commons search
          const commonsRes = await fetch(
            `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&srnamespace=6&srlimit=1&format=json`,
            { headers: { "User-Agent": "RPSCApp/1.0" } }
          );
          const commonsData = await commonsRes.json();
          if (commonsData.query?.search?.[0]) {
            const fileTitle = encodeURIComponent(commonsData.query.search[0].title);
            const fileRes = await fetch(
              `https://commons.wikimedia.org/w/api.php?action=query&titles=${fileTitle}&prop=imageinfo&iiprop=url&iiurlwidth=800&format=json`,
              { headers: { "User-Agent": "RPSCApp/1.0" } }
            );
            const fileData = await fileRes.json();
            const pages = fileData.query?.pages;
            if (pages) {
              const page = Object.values(pages)[0];
              if (page.imageinfo?.[0]?.thumburl) {
                imgUrl = page.imageinfo[0].thumburl;
              }
            }
          }
        }

        if (imgUrl && !images.find(img => img.url === imgUrl)) {
          images.push({
            url: imgUrl,
            title: item.keyword,
            caption: item.caption || wikiData.description || '',
            importance: item.importance || ''
          });
        }
      } catch(e) {}
    }

    const imageUrl = images.length > 0 ? images[0].url : null;
    const result = { imageUrl, images };
    serverCache[cacheKey] = result;
    res.json(result);
  } catch (error) {
    console.error("Image error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ===== QUICK IMAGE (fast, no Gemini) =====
app.post("/api/quick-image", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    const cacheKey = `qimg_${text}`;
    if (serverCache[cacheKey]) {
      return res.json(serverCache[cacheKey]);
    }

    // Clean text - remove Hindi parts after dash, keep English/key term
    let searchText = text.replace(/[-–].*$/, '').replace(/[^\w\s\u0900-\u097F]/g, '').trim();

    // Try multiple Wikipedia searches
    const searches = [
      searchText,
      searchText.split(' ').slice(0, 3).join(' '),
    ];

    let result = { imageUrl: null, title: '', caption: '' };

    for (const query of searches) {
      if (result.imageUrl) break;
      try {
        // Wikipedia search API to find the right article
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=3&format=json`;
        const searchRes = await fetch(searchUrl, { headers: { "User-Agent": "RPSCApp/1.0" } });
        const searchData = await searchRes.json();

        if (searchData.query?.search) {
          for (const article of searchData.query.search) {
            if (result.imageUrl) break;
            try {
              const summaryRes = await fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(article.title)}`,
                { headers: { "User-Agent": "RPSCApp/1.0" } }
              );
              const summaryData = await summaryRes.json();

              if (summaryData.originalimage?.source || summaryData.thumbnail?.source) {
                result = {
                  imageUrl: summaryData.originalimage?.source || summaryData.thumbnail.source.replace(/\/\d+px-/, '/600px-'),
                  title: summaryData.title || query,
                  caption: summaryData.description || ''
                };
              }
            } catch(e) {}
          }
        }
      } catch(e) {}
    }

    // Try Hindi Wikipedia if English didn't work
    if (!result.imageUrl) {
      try {
        const hiSearchUrl = `https://hi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchText)}&srlimit=2&format=json`;
        const hiRes = await fetch(hiSearchUrl, { headers: { "User-Agent": "RPSCApp/1.0" } });
        const hiData = await hiRes.json();

        if (hiData.query?.search?.[0]) {
          const title = hiData.query.search[0].title;
          const summaryRes = await fetch(
            `https://hi.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
            { headers: { "User-Agent": "RPSCApp/1.0" } }
          );
          const summaryData = await summaryRes.json();
          if (summaryData.originalimage?.source || summaryData.thumbnail?.source) {
            result = {
              imageUrl: summaryData.originalimage?.source || summaryData.thumbnail.source.replace(/\/\d+px-/, '/600px-'),
              title: summaryData.title || searchText,
              caption: summaryData.description || ''
            };
          }
        }
      } catch(e) {}
    }

    serverCache[cacheKey] = result;
    res.json(result);
  } catch (error) {
    console.error("Quick image error:", error.message);
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

    const cacheKey = `mock_${topic}_${lang}_${numQuestions}`;
    if (serverCache[cacheKey]) {
      return res.json(serverCache[cacheKey]);
    }

    const result = await callGemini(prompt);

    // Parse JSON from response (handle markdown code blocks if present)
    let jsonStr = result.trim();
    if (jsonStr.startsWith("```")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\s*\n?/, "").replace(/\n?```\s*$/, "");
    }

    const parsed = JSON.parse(jsonStr);
    serverCache[cacheKey] = parsed;
    res.json(parsed);
  } catch (error) {
    console.error("Mock test error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ===== YOUTUBE VIDEO SEARCH ENDPOINT =====
app.post("/api/youtube", async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) return res.status(400).json({ error: "Topic is required" });

    const searchQuery = encodeURIComponent(`${topic} RPSC exam preparation Hindi`);
    const searchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

    const response = await fetch(searchUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    const html = await response.text();

    // Extract video IDs from YouTube search results
    const videoIdRegex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
    const videoIds = [];
    let match;
    while ((match = videoIdRegex.exec(html)) !== null && videoIds.length < 5) {
      if (!videoIds.includes(match[1])) {
        videoIds.push(match[1]);
      }
    }

    if (videoIds.length === 0) {
      return res.json({ videos: [] });
    }

    // Extract titles for each video
    const videos = videoIds.map((id) => ({
      id,
      url: `https://www.youtube.com/watch?v=${id}`,
      embed: `https://www.youtube.com/embed/${id}`,
      thumbnail: `https://img.youtube.com/vi/${id}/mqdefault.jpg`
    }));

    res.json({ videos });
  } catch (error) {
    console.error("YouTube search error:", error.message);
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
