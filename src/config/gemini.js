// // node --version # Should be >= 18
// // npm install @google/generative-ai

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const MODEL_NAME = "gemini-1.5-pro";
// const API_KEY = "AIzaSyDlLZ_qmtnnQbdNZ7-AdwnQci6-DaheT2c";

// async function runChat(prompt) {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [
//     ],
//   });

//   const result = await chat.sendMessage(prompt);
//   const response = result.response;
//   console.log(response.text());
//   return response.text();
// }

// export default runChat;
import chatData from "./chatData.json";

async function runChat(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  // Find the best matching question from the data
  const match = chatData.questions.find((item) =>
    lowerPrompt.includes(item.question.toLowerCase())
  );

  if (match) {
    return match.answer; // Return the matched answer
  }

  return "Sorry, I don't have an answer for that question. Try asking something else.";
}

export default runChat;
