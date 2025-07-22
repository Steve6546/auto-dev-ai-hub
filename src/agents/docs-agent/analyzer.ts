export function analyze(outputPath: string, content: string): any {
  // For now, the analyzer just passes the data through.
  return { outputPath, content };
}
