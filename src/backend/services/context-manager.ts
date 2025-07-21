interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

class ContextManager {
  private context: Message[] = [];
  private maxTokens: number;

  constructor(maxTokens: number) {
    this.maxTokens = maxTokens;
  }

  addMessage(message: Message) {
    this.context.push(message);
    this.trimContext();
  }

  getContext() {
    return this.context;
  }

  private trimContext() {
    // This is a naive implementation. A better implementation would use a tokenizer
    // to accurately calculate the number of tokens.
    while (JSON.stringify(this.context).length > this.maxTokens) {
      this.context.shift();
    }
  }
}

export default ContextManager;
