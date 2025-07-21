#!/usr/bin/env node

const { Command } = require('commander');
const storage = require('node-persist');

const program = new Command();

program
  .name('ai-hub')
  .description('CLI for AutoDev AI Hub')
  .version('0.1.0');

program
  .command('list-models')
  .description('List available AI models')
  .action(() => {
    console.log('Available AI Models:');
    console.log('- gemini-2.5-pro (Recommended for complex tasks)');
    console.log('- gemini-2.5-flash (Faster, cost-effective for simple tasks)');
  });

program
  .command('select-model <model-id>')
  .description('Select the default AI model')
  .action(async (modelId) => {
    await storage.init({
      dir: 'config',
      stringify: JSON.stringify,
      parse: JSON.parse,
      encoding: 'utf8',
      logging: false,
      ttl: false,
      expiredInterval: 2 * 60 * 1000,
      forgiveParseErrors: false
    });
    await storage.setItem('defaultModel', modelId);
    console.log(`Default model set to: ${modelId}`);
  });

program.parse(process.argv);
