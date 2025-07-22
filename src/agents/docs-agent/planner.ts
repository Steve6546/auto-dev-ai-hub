export function plan(analysis: any): any {
  // For now, the planner just creates a simple plan to write the documentation.
  return {
    task: "Write documentation",
    outputPath: analysis.outputPath,
    content: analysis.content,
  };
}
