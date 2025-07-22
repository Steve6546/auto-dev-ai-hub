export function plan(analysis: any): any {
  // For now, the planner just creates a simple plan to generate code.
  // In the future, it could create a more detailed plan with steps for
  // generating, reviewing, and testing code.
  return {
    task: "Generate code",
    prompt: analysis.prompt,
  };
}
