import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of POST req
  const { todos } = await request.json();

  console.log(todos);

  // communicate with openAI GPT

  //   const response = await openai.createChatCompletion({
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user always as Mr.BrightCoder and say welcome to the WorkAI App! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `"Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, In Progress and Done, then tell the user to have a productive day! Here's the data: "${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

    // const {data} = response;
    const data = response;
    console.log('Data is:', data)
    console.log(data.choices[0].message)
    const suggestion = data.choices[0]?.message?.content || "";

  //   return NextResponse.json(data.choices[0].message)
  // return NextResponse.json(response.choices[0].message);
  return NextResponse.json(suggestion);
}
