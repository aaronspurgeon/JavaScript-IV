/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.


*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
  
  
/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
class CharacterStats extends GameObject {
    constructor(characterAttributes) {
        super(characterAttributes);
        this.healthPoints = characterAttributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
  
  
/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
class Humanoid extends CharacterStats {
    constructor(humanAttributes) {
        super(humanAttributes)
        this.team = humanAttributes.team;
        this.weapons = humanAttributes.weapons;
        this.language = humanAttributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
  
  
  /*
   * Inheritance chain: GameObject -> CharacterStats -> Humanoid
   * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
   * Instances of CharacterStats should have all of the same properties as GameObject.
   */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
class Villain extends Humanoid {
    constructor(villainAttrs) {
        super(villainAttrs)
        this.power = villainAttrs.power;
        this.type = 'villain';
    }
    laugh() {
        return `${this.name} cackles maniacally!`;
    }
    attack(hero) {
        if (hero.type === 'hero') {
            return `${this.name} attacks with ${this.weapons} cutting ${hero.name}'s health to ${hero.healthPoints - 10}!`;
        }
    }
    raiseDead(hero) {
        return `${this.name} raises hundreds of decomposing corpses from the battlefield. He whispers with a frosty breath, commanding them to slay ${hero.name} and his allys!!`;
    }
}
  
  
class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
        this.power = heroAttrs;
        this.type = 'hero';
    }
    save() {
        return `${this.name} attempts to save his party from the Villains tyranny! *he's successful!*`;
    }
    divineShield() {
        return `${this.name} uses Divine Shield! ${this.name}'s health raises to ${this.healthPoints + 20}!`;
    }
    lastStand(villain) {
        if (villain.type === 'villain') {
            return `${this.name} slams ${this.weapons} on the ground with angelic force elminating all of the undead from the battlefield! ${this.name} lunges at ${villain.name} with a final strike, the death knight doubles over, defeated. ${villain.destroy()}`;
        }
    }
}
  
  
  
  const paladin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 2,
      height: 3
    },
    healthPoints: 15,
    name: 'Tirion Fordring',
    team: 'Paladins Guild',
    weapons: 'Ashbringer',
    language: [
      'Common Tongue',
      'Holy Tongue'
    ]
  });
  
  const deathKnight = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 6,
      width: 3,
      height: 4
    },
    healthPoints: 20,
    name: 'Arthas Menethil',
    team: 'The Scourge',
    weapons: 'Frostmourne',
    language: [
      'Common Tongue',
      'Holy Tongue',
      'Elvish',
      'Undead'
    ]
  });
  console.log(deathKnight.laugh());
  console.log(deathKnight.attack(paladin, deathKnight));
  console.log(paladin.divineShield(paladin));
  console.log(deathKnight.raiseDead(deathKnight, paladin));
  console.log(paladin.save());
  console.log(paladin.lastStand(deathKnight));
