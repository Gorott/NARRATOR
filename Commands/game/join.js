const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "join",
  description: "to join a game",
  catgory: "game",
  run: async (bot, message, args) => {
    let status = db.fetch(`status`);
    if (status != "hosted") return;
    if (message.guild.id != "728065941459435573") return;
    if (message.channel.id != "741100898935111702") {
      return message.channel.send(
        `<@${message.author.id}>, this command can only be use in <#741100898935111702>.`
      );
    }

    if (message.member.roles.cache.has("728078695025344514")) {
      message.member.roles.remove("728078695025344514").catch(console.error);
      message.member.roles.add("728078042500431952").catch(console.error);
      message.member.roles.add("728076283724169266").catch(console.error);
    } else {
      message.member.roles.add("728078042500431952").catch(console.error);
      message.member.roles.add("728076283724169266").catch(console.error);
    }

    let playerrole = message.guild.roles.cache.get("728078042500431952")
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
