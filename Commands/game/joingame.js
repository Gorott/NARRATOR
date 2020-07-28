const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "joingame",
  description: "to join a game",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.guild.id != "729900329403154463") return;
    let status = db.fetch(`status`);
    if (status != "hosted") return;
    if (message.member.roles.cache.has("729900329659007070")) {
      message.member.roles.remove("729900329659007070").catch(console.error);
      message.member.roles.add("729900329659007074").catch(console.error);
    } else {
      message.member.roles.add("729900329659007074").catch(console.error);
    }
  }
};
