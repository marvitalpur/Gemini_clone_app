// const api_key = "AIzaSyAw-yYaAiMRhkv6Mi9Z4_M-GTGQmlIUKTI";


/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyAw-yYaAiMRhkv6Mi9Z4_M-GTGQmlIUKTI";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
   const  result = await chatSession.sendMessage(prompt);
//    const  response = result.response;
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
    return result.response.text()
  }
  
  export default run;