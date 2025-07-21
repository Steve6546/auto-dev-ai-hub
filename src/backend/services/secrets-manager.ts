import 'dotenv/config';

class SecretsManager {
  getSecret(key: string): string {
    const value = process.env[key];
    if (!value) {
      // In a test environment, it's okay to not have a key.
      if (process.env.NODE_ENV === 'test') {
        return 'test-key';
      }
      throw new Error(`Secret ${key} not found`);
    }
    return value;
  }
}

export default new SecretsManager();
