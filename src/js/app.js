// TODO: write your code here
import sum from './basic';

export function healthIndicator(character) {
  if (character.health > 50) {
    return 'healthy';
  } else if (character.health <= 50 && character.health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

console.log('worked');

console.log(sum([1, 2]));
