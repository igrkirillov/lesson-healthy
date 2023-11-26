export default function defineLevel(character) {
  const { health } = character;
  if (health >= 50) {
    return 'healthy';
  } if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
