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

export async function generateProjectBrief(yamlPath: string, roundId: number): Promise<string> {
  const fileContent = await fs.readFile(yamlPath, 'utf8');
  const config = yaml.load(fileContent) as ProjectConfig;

  const round = config.backlog.find(item => item.id === roundId);
  if (!round) {
    throw new Error(`Round with ID ${roundId} not found in ${yamlPath}`);
  }

  const prompt = `
    Please generate a comprehensive README.md file for the project "${config.project.name}".

    Project Description: ${config.project.description}

    This README should be based on the following task:
    Task Title: ${round.title}
    Task Description: ${round.description}

    The README should include sections for:
    - Vision and Mission
    - Core Features
    - Target Platforms
    - Tech Stack
    - Getting Started
    - How to Contribute

    Target Platforms: ${JSON.stringify(config.project.targets, null, 2)}
    Preferred Tech Stack: ${JSON.stringify(config.project.tech_stack_preference, null, 2)}
  `;

  return prompt.trim();
}
