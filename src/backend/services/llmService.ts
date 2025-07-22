import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import secretsManager from './secrets-manager';
import { recordUsage } from '../utils/tokenUsageTracker';

const geminiApiKey = secretsManager.getSecret('GEMINI_API_KEY');
if (!geminiApiKey) {
  throw new Error('GEMINI_API_KEY not found in environment variables.');
}
const genAI = new GoogleGenerativeAI(geminiApiKey);

const openaiApiKey = secretsManager.getSecret('OPENAI_API_KEY');
if (!openaiApiKey) {
    throw new Error('OPENAI_API_KEY not found in environment variables.');
}
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

/**
 * A unified interface to call different Large Language Models (LLMs).
 * @param modelId The ID of the model to call (e.g., 'gemini-1.5-flash', 'gpt-4').
 * @param prompt The prompt to send to the model.
 * @returns The response from the model as a string.
 */
export async function callLLM(modelId: string, prompt: string): Promise<string> {
  try {
    if (modelId.startsWith('gemini')) {
      const model = genAI.getGenerativeModel({ model: modelId });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const tokenUsage = await model.countTokens(prompt);
      await recordUsage(modelId, tokenUsage.totalTokens, 'input');
      return response.text();
    } else if (modelId.startsWith('gpt')) {
      const response = await openai.chat.completions.create({
        model: modelId,
        messages: [{ role: 'user', content: prompt }],
      });
      if (response.usage) {
        await recordUsage(modelId, response.usage.total_tokens, 'output');
      }
      return response.choices[0].message.content ?? '';
    } else {
      throw new Error(`Unsupported model ID: ${modelId}`);
    }
  } catch (error) {
    console.error(`Error calling LLM with model ${modelId}:`, error);
    throw error;
  }
}
