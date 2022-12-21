const { warrior } = require('./battleMembers');
const battleMembers = require ('./battleMembers');

const warriorAttack = () => {
  let damage = Math.floor(Math.random() * (60 - 30) + 30);

  return damage;
}

module.exports = warriorAttack;
