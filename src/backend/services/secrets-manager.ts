class SecretsManager {
  getSecret(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Secret ${key} not found`);
    }
    return value;
  }
}

export default new SecretsManager();
