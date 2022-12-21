const { mage } = require("./battleMembers");

const battleMembers = require('./battleMembers');

const mageAttack = () => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  
  if (mageMana > 15) {
    let damage = Math.floor(Math.random() * (90 - 45) + 45);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = damage;
    return turnStats;
  }
  return turnStats;
}

module.exports = mageAttack;
