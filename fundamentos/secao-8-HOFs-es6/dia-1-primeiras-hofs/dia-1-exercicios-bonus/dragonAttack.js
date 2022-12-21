const { dragon } = require('./battleMembers');
const battleMembers = require ('./battleMembers');

const dradonAttack = () => {
  let damage = Math.floor(Math.random() * (50 - 5) + 5);
  
  return damage;
}

module.exports = dradonAttack;
