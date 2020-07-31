const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "spectate",
  description: "to spectate a game",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.guild.id != "729900329403154463") return;
    let status = db.fetch(`status`);
    if (status === "ended") return;
    if (message.member.roles.cache.has("729900329659007074")) {
      message.member.roles.remove("729900329659007074").catch(console.error);
      message.member.roles.add("729900329659007070").catch(console.error);
      message.channel.send(
        `<@${message.author.id}>, please also ping the Host to remove your number role.`
      );
    } else {
      message.member.roles.add("729900329659007070").catch(console.error);
    }
  }
};
