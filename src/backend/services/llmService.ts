import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import secretsManager from './secrets-manager';

const genAI = new GoogleGenerativeAI(secretsManager.getSecret('GEMINI_API_KEY'));
const openai = new OpenAI({
  apiKey: secretsManager.getSecret('OPENAI_API_KEY'),
});

export async function callLLM(modelId: string, prompt: string): Promise<string> {
  if (modelId.startsWith('gemini')) {
    const model = genAI.getGenerativeModel({ model: modelId });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } else if (modelId.startsWith('gpt')) {
    const response = await openai.chat.completions.create({
      model: modelId,
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0].message.content ?? '';
  } else {
    throw new Error(`Unsupported model ID: ${modelId}`);
  }
}
