import defineLevel from '../healthDefiner';

class Character {
  constructor(health, name) {
    this.health = health;
    this.name = name;
  }
}

test.each([
  [new Character(80, 'Lion'), 'healthy'],
  [new Character(20, 'Monkey'), 'wounded'],
  [new Character(10, 'Rabbit'), 'critical'],
])('test health definer with character %o', (ch, expected) => {
  expect(defineLevel(ch)).toBe(expected);
});
