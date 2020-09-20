const db = require("quick.db");

module.exports = {
  name: "wvote",
  description: "werewolf vote",
  category: "role commands",
  run: async (bot, message, args) => {
    const time = db.fetch(`time`);
    const werewolf = db.fetch(`role_${message.member.nickname}`);
    if (
      werewolf === `werewolf` ||
      `alpha werewolf` ||
      `wolf shaman` ||
      `wolf seer`
    ) {
      if (time === `night` && args.length === 1) {
        let user = message.guild.members.cache.find(
          x => x.nickname === args[0]
        );
        if (user) {
          if (user.roles.cache.some(role => role.name === "Dead")) {
            return message.channel.send(`You cannot kill a dead player.`);
          }
          let userrole = db.fetch(`role_${user.nickname}`);
          if (
            userrole === `werewolf` ||
            `alpha werewolf` ||
            `wolf shaman` ||
            `wolf seer`
          ) {
            return message.channel.send(
              `You cannot kill a player in the Werewolves team.`
            );
          }
        }
      }
    }
  }
};
