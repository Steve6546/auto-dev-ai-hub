import * as fs from 'fs/promises';

export async function writeDocumentation(filePath: string, content: string): Promise<void> {
  await fs.writeFile(filePath, content, 'utf8');
}
