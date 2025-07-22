export function plan(roundId: number): any {
  let plan;
  if (roundId === 1) {
    plan = {
      task: "Generate project brief prompt",
    };
  } else if (roundId === 2) {
    plan = {
      task: "Generate tech stack prompt",
    };
  } else if (roundId === 3) {
    plan = {
      task: "Generate UI wireframe prompt",
    };
  } else {
    throw new Error(`Round ${roundId} is not supported yet.`);
  }
  return plan;
}
