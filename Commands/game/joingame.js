const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "joingame",
  description: "to join a game",
  catgory: "game",
  run: async (bot, message, args) => {
    let status = db.fetch(`status`);
    if (status != "hosted") return;
    if (message.guild.id != "729900329403154463") return;
    if (message.channel.id != "729900329667133459") {
      return message.channel.send(
        `<@${message.author.id}>, this command can only be use in <#729900329667133459>.`
      );
    }

    if (message.member.roles.cache.has("729900329659007070")) {
      message.member.roles.remove("729900329659007070").catch(console.error);
      message.member.roles.add("729900329659007074").catch(console.error);
    } else {
      message.member.roles.add("729900329659007074").catch(console.error);
    }

    let playerrole = message.guild.roles.cache.get("729900329659007074")
      .members;

    let playernumber = Math.floor(playerrole.size + 1);

    if (playernumber > 12) {
      return message.channel.send(
        `<@${message.author.id}>, there are already 12 players in this game. Type \`=spectate\` to spectate.`
      );
    }

    message.member.setNickname(playernumber);

    let role = message.guild.roles.cache.find(r => r.name === playernumber);

    message.member.roles.add(role);
  }
};
