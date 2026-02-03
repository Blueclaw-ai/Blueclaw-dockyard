export type Channel = string;

export interface SkillContext {
  input: any;
  state: Record<string, any>;
  env: {
    now: () => string;
  };
}

export interface SkillResult {
  output?: any;
  state?: Record<string, any>;
}

export type Skill = (ctx: SkillContext) => Promise<SkillResult>;
