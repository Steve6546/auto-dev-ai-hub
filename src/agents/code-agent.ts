import BaseAgent from '../backend/agents/base-agent';
import { callLLM } from '../backend/services/llmService';

class CodeAgent extends BaseAgent {
  constructor() {
    super();
    this.contextManager.addMessage({
      role: 'system',
      content: 'You are a code generation agent. You will be given a prompt and you need to generate code based on it.',
    });
  }

  async run(prompt: string): Promise<string> {
    return this.getCompletion(prompt);
  }

  async generateCode(prompt: string): Promise<string> {
    const modelId = 'gemini-1.5-flash'; // Or get from config
    return callLLM(modelId, prompt);
  }
}

export default CodeAgent;
