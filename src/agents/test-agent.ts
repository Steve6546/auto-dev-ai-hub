import BaseAgent from '../backend/agents/base-agent';

class TestAgent extends BaseAgent {
  constructor() {
    super();
    this.contextManager.addMessage({
      role: 'system',
      content: 'You are a test generation agent. You will be given a piece of code and you need to generate tests for it.',
    });
  }

  async run(code: string): Promise<string> {
    const prompt = `Generate tests for the following code:\n\n${code}`;
    return this.getCompletion(prompt);
  }
}

export default TestAgent;
