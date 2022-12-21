const battleMembers = require('./battleMembers');
const dradonAttack = require('./dragonAttack');
const warriorAttack = require('./warriorAttack');
const mageAttack = require('./mageAttack');
const { dragon, warrior, mage } = require('./battleMembers');

const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack();
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack();
      const mageDamage = mageTurnStats.damageDealt;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaSpent;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack();
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dradonAttack);
  console.log(gameActions.turnResults());