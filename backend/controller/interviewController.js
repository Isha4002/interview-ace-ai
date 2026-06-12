const model = require("../config/gemini");

const generateInterview = async (req, res) => {
  try {
    const { role, level } = req.body;

    const prompt = `
Generate 10 interview questions.

Role: ${role}
Experience Level: ${level}

Return only numbered interview questions.
`;

    const result = await model.generateContent(
      prompt
    );

    const response =
      result.response.text();

    res.status(200).json({
      success: true,
      questions: response,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  generateInterview,
};