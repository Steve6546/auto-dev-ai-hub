import { callLLM } from '../../backend/services/llmService';

export async function execute(plan: any): Promise<string> {
  if (plan.task === "Generate code") {
    const modelId = 'gemini-1.5-flash'; // Or get from config
    return callLLM(modelId, plan.prompt);
  } else {
    throw new Error(`Unsupported plan task: ${plan.task}`);
  }
}
