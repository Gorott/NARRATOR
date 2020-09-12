const db = require("quick.db");
const { i, roles, seer } = require("../game/role.js");
const Discord = require("discord.js");

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  run: async (bot, message, args) => {
    const check = db.fetch(`role_${message.member.nickname}`);
    if (check === `seer` && args.length === 1) {
      let user = message.guild.members.cache.find(
        x => x.nickname === args[0]
      );
      if (user) {
        const seerChecked = db.fetch(`role_${args[0]}`);
        message.channel.send(`${args[0]} is ${seerChecked}`);
      }
    }
    if (check === `aura seer` && args.length === 1) {
      if (user) {
        const auraChecked = db.fetch(`role_${args[0]}`);
        if (seerChecked === `werewolf` || `alpha werewolf` || `shaman werewolf` || `wolf seer`) {
          message.channel.send(`${args[0]} is bad`)
        }
        else if (seerChecked === `serial killer` || `medium` || `jailer` || `headhunter` || `gunner`) {
          message.channel.send(`${args[0]} is unkown`)
        }
      }
    }
  }
};
