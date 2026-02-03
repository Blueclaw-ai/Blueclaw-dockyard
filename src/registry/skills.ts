// Resolves skills by id
export async function resolveSkill(id: string) {
  if (id === 'blueclaw-core') {
    const mod = await import('../skills/blueclaw-core/index.js');
    return mod.blueclawCoreSkill;
  }
  throw new Error(`Unknown skill: ${id}`);
}
