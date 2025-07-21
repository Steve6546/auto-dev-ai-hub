import openai from '../services/ai-client';
import ContextManager from '../services/context-manager';

abstract class BaseAgent {
  protected contextManager: ContextManager;

  constructor() {
    this.contextManager = new ContextManager(4096);
  }

  protected async getCompletion(prompt: string, retries = 3): Promise<string> {
    this.contextManager.addMessage({ role: 'user', content: prompt });
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: this.contextManager.getContext(),
      });
      const message = response.choices[0].message.content;
      this.contextManager.addMessage({ role: 'assistant', content: message });
      return message;
    } catch (error) {
      if (retries > 0) {
        return this.getCompletion(prompt, retries - 1);
      }
      throw error;
    }
  }

  abstract run(input: any): Promise<any>;
}

export default BaseAgent;
