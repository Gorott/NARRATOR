const db = require("quick.db");
const { i, roles, seer } = require("../game/role.js");
const Discord = require("discord.js");

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  run: async (bot, message, args) => {
    const seercheck = db.fetch(`role_${message.member.nickname}`);
    if (seercheck === `seer` && args.length === 1) {
      const user = message.guild.members.cache.find(
        x => x.nickname === args[0]
      );
      if (user) {
        const seerChecked = db.fetch(`role_${args[0]}`);
        message.channel.send(`${args[0]} is ${seerChecked}`);
      }
    }
  }
};
