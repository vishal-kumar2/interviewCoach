import model from "../services/geminiServices.js";

export const generateQuestions = async (req, res) => {
  try {
    const { role, topic } = req.body;

    const prompt = `
Generate 5 interview questions for:

Role: ${role}
Topic: ${topic}

Start from easy to medium difficulty.

Return ONLY valid JSON array.

Example:
[
  "Question 1",
  "Question 2"
]
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const questions = JSON.parse(text);

    res.json({
      success: true,
      questions,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate questions",
    });
  }
};


export const evaluateAnswer = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const prompt = `
You are a technical interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer based on:
- technical correctness
- clarity
- completeness

Return ONLY valid JSON.

Format:
{
  "score": number,
  "feedback": "short feedback",
  "correctAnswer": "ideal answer"
}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const evaluation = JSON.parse(text);

    res.json({
      success: true,
      evaluation,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to evaluate answer",
    });
  }
};