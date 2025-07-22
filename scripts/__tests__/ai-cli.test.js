const { exec } = require('child_process');

describe('ai-cli', () => {
  it('should show help', (done) => {
    exec('node scripts/ai-cli.js --help', (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stdout).toContain('Usage: ai-hub [options] [command]');
      done();
    });
  });

  it('should list models', (done) => {
    exec('node scripts/ai-cli.js list-models', (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stdout).toContain('Available AI Models:');
      done();
    });
  });

  it('should select a model', (done) => {
    exec('node scripts/ai-cli.js select-model gemini-1.5-flash', (error, stdout, stderr) => {
      expect(error).toBeNull();
      expect(stdout).toContain('Default model set to: gemini-1.5-flash');
      done();
    });
  });
});
