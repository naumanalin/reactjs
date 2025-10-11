import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.AIMODEL_KEY,
});

const PROMPT = `
You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.
Only ask questions about the following details in order:
1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences
Once all required information is collected, generate and return JSON like:
{
  "resp": "Text response",
  "ui": "budget/groupSize/TripDuration/Final"
}
Always use a conversational style.
`;

export async function POST(req: NextRequest) {
  try {
    const { promptMessages } = await req.json();

    if (!promptMessages || !Array.isArray(promptMessages)) {
      return NextResponse.json(
        { error: "promptMessages must be an array" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: PROMPT },
        ...promptMessages,
      ],
      user: "user_12345",
    });

    const aiResponse = response.choices[0]?.message?.content;
    if (!aiResponse) {
      throw new Error("No AI response found");
    }

    return NextResponse.json(JSON.parse(aiResponse));
  } catch (error) {
    console.error("AI Model Error:", error);
    return NextResponse.json(
      { error: "Error generating AI response" },
      { status: 500 }
    );
  }
}
