import OpenAI from 'openai';
import secretsManager from './secrets-manager';

const openai = new OpenAI({
  apiKey: secretsManager.getSecret('OPENAI_API_KEY'),
});

export default openai;
