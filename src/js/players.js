/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-classes-per-file */
export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) throw new Error('имя должно быть от 2 до 10 символов');
    const toString = type.toString();
    const toOneCase = toString.toLowerCase();
    if (toOneCase != 'bowman' && toOneCase != 'swordsman' && toOneCase != 'magician' && toOneCase != 'deamon' && toOneCase != 'undead' && toOneCase != 'zombie') throw new Error('тип игрока может быть только Bowman, Swordsman, Magician, Deamon, Undead или Zombie');
    this.name = name,
    this.type = toOneCase,
    this.health = 100,
    this.level = 1,
    this.attack,
    this.defence;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('нельзя повысить левел умершего');
    this.level += 1;
    this.attack += this.attack / 100 * 20,
    this.defence += this.defence / 100 * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Deamon extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 10,
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 25,
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type),
    this.attack = 40,
    this.defence = 10;
  }
}
