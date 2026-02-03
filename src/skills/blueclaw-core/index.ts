import { Skill } from './types.js';

export const blueclawCoreSkill: Skill = async (ctx) => {
  return {
    output: ctx.input,
    state: {
      runtime: { ts: ctx.env.now() },
    },
  };
};
