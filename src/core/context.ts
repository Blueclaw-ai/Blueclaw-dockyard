export interface Context {
  input: any;
  state: Record<string, any>;
  env: {
    now: () => string;
  };
}

export function createContext(input: any, state: Record<string, any> = {}): Context {
  return {
    input,
    state,
    env: {
      now: () => new Date().toISOString(),
    },
  };
}
