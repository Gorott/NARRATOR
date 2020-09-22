const db = require("quick.db");
const Timeout = require("../../events/guild/message");
const ms = require(`ms`);
module.exports = {
  name: "protect",
  description: "protect someone",
  category: "role commands",
  timeout: 180000,
  run: async (bot, message, args) => {
    const time = db.fetch(`time`);
    const protect = db.fetch(`role_${message.member.nickname}`);
    if (time === `night` && args.length === 1 && protect === `doctor`) {
      let user = message.guild.members.cache.find(x => x.nickname === args[0]);
        if (user) {
          if (message.member.nickname === user) {
            return message.channel.send(`You cannot protect yourself.`);
          }
          if (user.roles.cache.some(role => role.name === "Dead")) {
            return message.channel.send(`You cannot protect a dead player.`);
          } else {
            let killed = db.fetch(`killed_${args[0]}`);
            if (killed === true) {
              db.set(`protected`, args[0]);
              db.set(`killed_${args[0]}`, false);
            }
            message.channel.send(`${message.member.nickname} protect ${args[0]}`)
          }
        }
      
    }
  }
};
