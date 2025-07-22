import * as fs from 'fs/promises';
import * as path from 'path';

export async function execute(plan: any): Promise<void> {
  if (plan.task === "Write documentation") {
    const dir = path.dirname(plan.outputPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(plan.outputPath, plan.content, 'utf8');
  } else {
    throw new Error(`Unsupported plan task: ${plan.task}`);
  }
}
