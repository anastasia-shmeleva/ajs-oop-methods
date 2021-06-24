/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman, Swordsman, Magician, Deamon, Undead, Zombie, Character,
} from './players';

const bowman = new Bowman('Alex', 'bowman');
bowman.health = 10;
console.log(bowman);
bowman.levelUp();
console.log(bowman);
bowman.damage(10);
console.log(bowman);

const swordsman = new Swordsman('Max', 'Swordsman');
console.log(swordsman);

const magician = new Magician('Sam', 'Magician');
console.log(magician);

const deamon = new Deamon('Maze', 'Deamon');
console.log(deamon);

const undead = new Undead('Carl', 'Undead');
console.log(undead);

const zombie = new Zombie('Pop', 'Zombie');
console.log(zombie);

// const test = new Bowman('B');
// console.log(test);

// const test2 = new Bowman('Bob', 'cat');
// console.log(test2);