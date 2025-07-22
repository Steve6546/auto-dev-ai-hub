import * as fs from 'fs/promises';
import * as path from 'path';

export async function writeDocumentation(filePath: string, content: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, content, 'utf8');
}
