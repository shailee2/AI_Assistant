const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors()); // ✅ Allow frontend like CodeSandbox to connect
app.use(express.json()); // ✅ Parse incoming JSON bodies

const API_KEY = process.env.DEEPINFRA_API_KEY;
const DEEPINFRA_URL =
  "https://api.deepinfra.com/v1/inference/mistralai/Mixtral-8x7B-Instruct-v0.1";

// POST /ask → calls DeepInfra with user's input and returns the response
app.post("/ask", async (req, res) => {
  const input = req.body.input;
  if (!input) return res.status(400).json({ error: "No input provided" });

  try {
    const response = await axios.post(
      DEEPINFRA_URL,
      {
       // input: input,
        input: `You are a helpful assistant. Only answer the single question below as briefly and accurately as possible. Do not generate any additional questions or content.\n\nQuestion: ${input}`,

        max_new_tokens: 300, // optional: controls response length
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );


/*     const response = await axios.post(
  DEEPINFRA_URL,
  {
    input: `You are a helpful assistant. Only answer the single question below as briefly and accurately as possible. Do not generate any additional questions or content.\n\nQuestion: ${input}`,
    max_new_tokens: 100,
    stop: ["Question:", "##", "\n\n", `${input}`],  // Any time it tries to repeat the prompt format, stop
  },
  {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  }
); */

    //const answer = response.data.results?.[0]?.generated_text;
    const fullText = response.data.results?.[0]?.generated_text || "";
    const answer = fullText.split("Question:")[0].trim(); // cut off extra questions
    res.json({ answer });


/*     const fullText = response.data.results?.[0]?.generated_text || "";

    // Keep only the first 1–2 lines (to cut off trivia dump)
    const answer = fullText.split(/\n|Question:|##/)[0].trim();

    res.json({ answer }); */

  } catch (error) {
    console.error("DeepInfra error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response from AI model" });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
