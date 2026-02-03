export function mergeState(prev: Record<string, any>, next?: Record<string, any>): Record<string, any> {
  return { ...prev, ...(next || {}) };
}
