import Orchestrator from '../orchestrator';
import openai from '../../services/ai-client';

jest.mock('../../services/ai-client', () => ({
  chat: {
    completions: {
      create: jest.fn().mockResolvedValue({
        choices: [{ message: { content: 'mocked response' } }],
      }),
    },
  },
}));

describe('Orchestrator', () => {
  it('should run the full workflow', async () => {
    const orchestrator = new Orchestrator();
    const result = await orchestrator.run('create a function that adds two numbers');
    expect(result).toHaveProperty('code');
    expect(result).toHaveProperty('testResults');
    expect(result).toHaveProperty('review');
    expect(result.code).toBe('mocked response');
  });
});
