import { generateProjectBrief, generateTechStackPrompt, generateUIWireframePrompt } from '../specificationModule';
import * as fs from 'fs/promises';
import * as yaml from 'js-yaml';

jest.mock('fs/promises');
jest.mock('js-yaml');

describe('SpecificationModule', () => {
  const mockYamlContent = {
    project: {
      name: 'AutoDev AI Hub',
      description: 'An AI-powered software development platform.',
      targets: {
        windows: true,
        browser: true,
      },
      tech_stack_preference: {
        backend: 'Node.js with Express/Fastify',
        frontend: 'React with Electron',
      },
    },
    backlog: [
      {
        id: 1,
        title: 'Round 1 - Project Briefing & Initial Documentation',
        description: 'Generate the initial README.md.',
      },
      {
        id: 2,
        title: 'Round 2 - Tech Stack Design & Documentation',
        description: 'Design a comprehensive tech stack.',
      },
      {
        id: 3,
        title: 'Round 3 - Initial UI Wireframes Design',
        description: 'Design the initial UI wireframes.',
      },
    ],
  };

  beforeEach(() => {
    (fs.readFile as jest.Mock).mockResolvedValue('mock yaml content');
    (yaml.load as jest.Mock).mockReturnValue(mockYamlContent);
  });

  it('should generate a project brief prompt', async () => {
    const prompt = await generateProjectBrief('project_tasks.yaml', 1);
    expect(prompt).toContain('Please generate a comprehensive README.md file');
    expect(prompt).toContain('AutoDev AI Hub');
  });

  it('should generate a tech stack prompt', async () => {
    const prompt = await generateTechStackPrompt('project_tasks.yaml', 2);
    expect(prompt).toContain('As an expert software architect, design a comprehensive and well-justified tech stack');
    expect(prompt).toContain('AutoDev AI Hub');
  });

  it('should generate a UI wireframe prompt', async () => {
    const prompt = await generateUIWireframePrompt('project_tasks.yaml', 3);
    expect(prompt).toContain('As an expert UI/UX designer, create a detailed textual wireframe');
    expect(prompt).toContain('AutoDev AI Hub');
  });
});
