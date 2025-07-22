import * as fs from 'fs/promises';
import * as path from 'path';

const TOKEN_USAGE_PATH = path.join(process.cwd(), 'data', 'token_usage.json');

interface TokenUsage {
  modelId: string;
  tokensUsed: number;
  type: 'input' | 'output';
  timestamp: string;
}

export async function recordUsage(modelId: string, tokensUsed: number, type: 'input' | 'output'): Promise<void> {
  const usage: TokenUsage = {
    modelId,
    tokensUsed,
    type,
    timestamp: new Date().toISOString(),
  };

  try {
    await fs.mkdir(path.dirname(TOKEN_USAGE_PATH), { recursive: true });
    const data = await fs.readFile(TOKEN_USAGE_PATH, 'utf8');
    const usages = JSON.parse(data);
    usages.push(usage);
    await fs.writeFile(TOKEN_USAGE_PATH, JSON.stringify(usages, null, 2));
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(TOKEN_USAGE_PATH, JSON.stringify([usage], null, 2));
    } else {
      console.error('Error recording token usage:', error);
    }
  }
}
