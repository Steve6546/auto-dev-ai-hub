import CodeAgent from './code-agent';
import TestAgent from './test-agent';
import ReviewAgent from './review-agent';

class Orchestrator {
  private codeAgent: CodeAgent;
  private testAgent: TestAgent;
  private reviewAgent: ReviewAgent;

  constructor() {
    this.codeAgent = new CodeAgent();
    this.testAgent = new TestAgent();
    this.reviewAgent = new ReviewAgent();
  }

  async run(prompt: string) {
    const code = await this.codeAgent.run(prompt);
    const testResults = await this.testAgent.run(code);
    const review = await this.reviewAgent.run({ code, testResults });
    return { code, testResults, review };
  }
}

export default Orchestrator;
