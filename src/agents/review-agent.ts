import BaseAgent from '../backend/agents/base-agent';

class ReviewAgent extends BaseAgent {
  constructor() {
    super();
    this.contextManager.addMessage({
      role: 'system',
      content: 'You are a code review agent. You will be given a piece of code and test results, and you need to provide a review.',
    });
  }

  async run({ code, testResults }: { code: string; testResults: string }): Promise<string> {
    const prompt = `Review the following code and test results:\n\nCode:\n${code}\n\nTest Results:\n${testResults}`;
    return this.getCompletion(prompt);
  }
}

export default ReviewAgent;
