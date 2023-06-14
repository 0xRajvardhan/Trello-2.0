import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST request
  const { todos } = await request.json();
  console.log(todos);

  // communicate with OpenAI API
  const response = await openai.createChatCompletion({
    model: "gpt-3",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user always as Mr.Rajvardhan and welcome to the trello 2.0! limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the todos in the board. Count how many todos are in each catagory such as to do, in progress and done, then tell the user to have a produtive day! Here's the data: ${JSON.stringify(
          todos
        )} `,
      },
    ],
  });
}
