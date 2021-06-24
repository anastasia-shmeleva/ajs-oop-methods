import { Character, Bowman, Swordsman, Magician, Deamon, Undead, Zombie, LevelUp } from "../js/players";

test('Character', () => {
    expect(new Character('Alex', 'magician')).toEqual({ name: "Alex", type: "magician", health: 100, level: 1 });
});

test('Bowman', () => {
    expect(new Bowman('Alex', 'Bowman')).toEqual({ name: "Alex", type: "bowman", health: 100, level: 1, attack: 25, defence: 25 });
});

test('Swordsman', () => {
    expect(new Swordsman('Alex', 'Swordsman')).toEqual({ name: "Alex", type: "swordsman", health: 100, level: 1, attack: 40, defence: 10 });
});

test('Magician', () => {
    expect(new Magician('Alex', 'Magician')).toEqual({ name: "Alex", type: "magician", health: 100, level: 1, attack: 10, defence: 40 });
});

test('Deamon', () => {
    expect(new Deamon('Alex', 'Deamon')).toEqual({ name: "Alex", type: "deamon", health: 100, level: 1, attack: 10, defence: 40 });
});

test('Undead', () => {
    expect(new Undead('Alex', 'Undead')).toEqual({ name: "Alex", type: "undead", health: 100, level: 1, attack: 25, defence: 25 });
});

test('Zombie', () => {
    expect(new Zombie('Alex', 'Zombie')).toEqual({ name: "Alex", type: "zombie", health: 100, level: 1, attack: 40, defence: 10 });
});

test('levelUp', () => {
    const bowman = new Bowman('Alex', 'bowman');
    bowman.levelUp();
    const result = bowman;
    expect(result).toEqual({ name: "Alex", type: "bowman", health: 100, level: 2, attack: 30, defence: 30 });
});

test('damage', () => {
    const bowman = new Bowman('Alex', 'bowman');
    bowman.damage(10);
    const result = bowman;
    expect(result).toEqual({ name: "Alex", type: "bowman", health: 92.5, level: 1, attack: 25, defence: 25 });
});

test('Error name', () => {  
    expect(() => {
        new Bowman('B', 'bowman');
        throw new Error('имя должно быть от 2 до 10 символов');
      }).toThrow();
});

test('Error levelUp', () => {  
    expect(() => {
        const bowman = new Bowman('Alex', 'bowman');
        bowman.health = 0;
        bowman.levelUp();
        throw new Error('нельзя повысить левел умершего');
      }).toThrow();
});

test('Error type', () => {  
    expect(() => {
        new Bowman('Bob', 'cat')
        throw new Error('тип игрока может быть только Bowman, Swordsman, Magician, Deamon, Undead или Zombie');
      }).toThrow();
});

test('function damage', () => {  
    const bowman = new Bowman('Alex', 'bowman');
    bowman.health =  - 10;
    bowman.damage(10);
    expect(bowman).toEqual({ name: "Alex", type: "bowman", health: - 10, level: 1, attack: 25, defence: 25 });
});
