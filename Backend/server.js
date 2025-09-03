import OpenAI from 'openai';
import 'dotenv/config';

const client = new OpenAI({
  apiKey: process.env.PENAI_API_KEY, 
});

const response = await client.responses.create({
  model: 'gpt-4o-mini',
  // instructions: 'You are a coding assistant that talks like a pirate',
  input: 'Joke related to Computer Science',
});

console.log(response.output_text);