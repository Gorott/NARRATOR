const db = require("quick.db");
const { i, roles, seer } = require("../game/role.js");
const Discord = require("discord.js");

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  timeout: 180000,
  run: async (bot, message, args) => {
    const time = db.fetch(`time`);
    if (time === `night`) {
      if (args.length === 1) {
        const check = db.fetch(`role_${message.member.nickname}`);
        let user = message.guild.members.cache.find(
          x => x.nickname === args[0]
        );
        if (check === `seer`) {
          if (user) {
            const seerChecked = db.fetch(`role_${args[0]}`);
            message.channel.send(`${args[0]} is ${seerChecked}.`);
          }
        }

        if (check === `aura seer`) {
          if (user) {
            const auraChecked = db.fetch(`role_${args[0]}`);
            if (
              auraChecked === `werewolf` ||
              `alpha werewolf` ||
              `shaman werewolf` ||
              `wolf seer`
            ) {
              message.channel.send(`${args[0]}'s aura is bad.`);
            } else if (
              auraChecked === `serial killer` ||
              `medium` ||
              `jailer` ||
              `headhunter` ||
              `gunner`
            ) {
              message.channel.send(`${args[0]}'s aura is unknown.`);
            } else if (
              auraChecked === `aura seer` ||
              `doctor` ||
              `seer` ||
              `bodyguard` ||
              `priest`
            ) {
              message.channel.send(`${args[0]}'s aura is good.`);
            }
          }
        }
      }
    }
  }
};
