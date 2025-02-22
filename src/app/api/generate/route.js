import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamObject } from 'ai';
import {z} from "zod"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

const timeline = z.array({
  title: z.string(),
  description: z.string(),
  month: z.number(),
  year: z.number(),
  icon: z.string(),
})

export const maxDuration = 30;


export async function POST(req) {
    console.log("req", req);
    const { messages } = await req.json();

    const result = streamObject({
        model: google('gemini-2.0-flash'),
        messages,
        schema: timeline,
        system: `
        You are a timeline builder. you should be able to build a timeline from the messages you receive. timeline must have fields like month, year, title, description, icon.
        the icon should be the component name of the 'lucide-react' package.
        `,
    });

    return result.toTextStreamResponse();
}