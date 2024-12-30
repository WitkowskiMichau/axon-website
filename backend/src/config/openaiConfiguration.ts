import OpenAI from "openai";

console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY);
if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OpenAI API key in environment variables.");
}

// Initialize OpenAI client
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
