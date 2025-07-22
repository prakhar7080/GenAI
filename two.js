import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
const ai = new GoogleGenAI({ apiKey: ""});

const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  history:[]
})

async function main(){
    const userProblem = readlineSync.question("Ask me anything ... ")
    const responce = await chat.sendMessage({
      message:userProblem,
    });
    console.log(responce.text);
    main();
}

main();