import BaseAgent from '../backend/agents/base-agent';

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
}

export default CodeAgent;
