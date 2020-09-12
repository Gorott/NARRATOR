const db = require("quick.db");
const { i, roles, seer } = require("../game/role.js");
const Discord = require("discord.js");

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  timeout: 180000,
  run: async (bot, message, args) => {
    const time = db.fetch(`time`)
    const check = db.fetch(`role_${message.member.nickname}`);
    if (time === `night`) {
    if (check === `seer` && args.length === 1) {
      let user = message.guild.members.cache.find(
        x => x.nickname === args[0]
      );
      if (user) {
        const seerChecked = db.fetch(`role_${args[0]}`);
        message.channel.send(`${args[0]} is ${seerChecked}`);
      }
    }
    }
    if (time === `night`) {
    if (check === `aura seer` && args.length === 1) {
      let user = message.guild.members.cache.find(
        x => x.nickname === args[0]
      );
      if (user) {
        const auraChecked = db.fetch(`role_${args[0]}`);
        if (auraChecked === `werewolf` || `alpha werewolf` || `shaman werewolf` || `wolf seer`) {
          message.channel.send(`${args[0]} is bad`)
        } else if (auraChecked === `serial killer` || `medium` || `jailer` || `headhunter` || `gunner`) {
          message.channel.send(`${args[0]} is unkown`)
        } else if (auaraChecked === `aura seer` || `doctor` || `seer` || `bodyguard` || `priest`) {
          message.channel.send(`${args[0]} is good`)
        }
      }
    }
  }
  }
};
