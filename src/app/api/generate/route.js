import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamObject } from 'ai';
import {z} from "zod"
import { NextResponse } from 'next/server';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export const timeline = z.array(z.object({
  title: z.string(),
  description: z.string(),
  month: z.number(),
  year: z.number(),
  icon: z.string(),
}))

export const maxDuration = 30;


export async function POST(req) {
    // console.log("req", req);
    const messages = await req.json();

    // console.log(messages);

    const result = streamObject({
        model: google('gemini-2.0-flash'),
        schema: timeline,
        prompt: messages,
        system: `
        You are a timeline builder. you should be able to build a timeline from the messages you receive. timeline must have fields like month, year, title, description, icon.
        the icon should be the component name of the 'lucide-react' package. only give the schema, dont say anything else.
        `,
    });

    return result.toTextStreamResponse();
}
