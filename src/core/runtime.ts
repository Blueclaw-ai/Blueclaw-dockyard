import { Context } from './context.js';
import { mergeState } from './state.js';

export async function runSkills(skills: Array<(ctx: Context) => Promise<any>>, ctx: Context) {
  let currentState = { ...ctx.state };
  let lastOutput = undefined;
  for (let i = 0; i < skills.length; ++i) {
    try {
      const result = await skills[i]({ ...ctx, state: currentState });
      if (result && typeof result === 'object') {
        if ('state' in result) {
          currentState = mergeState(currentState, result.state);
        }
        if ('output' in result) {
          lastOutput = result.output;
        }
      }
    } catch (err) {
      throw new Error(`Skill ${i} failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  return { output: lastOutput, state: currentState };
}
