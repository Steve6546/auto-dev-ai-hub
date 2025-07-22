import * as fs from 'fs/promises';
import * as yaml from 'js-yaml';

interface ProjectConfig {
  project: {
    name: string;
    description: string;
    targets: any;
    tech_stack_preference: any;
  };
  backlog: {
    id: number;
    title: string;
    description: string;
  }[];
}

export async function analyzeTask(yamlPath: string, roundId: number): Promise<any> {
  const fileContent = await fs.readFile(yamlPath, 'utf8');
  const config = yaml.load(fileContent) as ProjectConfig;
  const round = config.backlog.find(item => item.id === roundId);

  if (!round) {
    throw new Error(`Round with ID ${roundId} not found in ${yamlPath}`);
  }

  return { config, round };
}
