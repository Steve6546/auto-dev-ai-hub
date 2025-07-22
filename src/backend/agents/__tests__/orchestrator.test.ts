import Orchestrator from '../orchestrator';

describe('Orchestrator', () => {
  it('should run the full workflow', async () => {
    // This is a mock test. In a real application, we would mock the OpenAI API
    // and test the orchestrator's logic.
    const orchestrator = new Orchestrator();
    const result = await orchestrator.run('create a function that adds two numbers');
    expect(result).toHaveProperty('code');
    expect(result).toHaveProperty('testResults');
    expect(result).toHaveProperty('review');
  });
});
