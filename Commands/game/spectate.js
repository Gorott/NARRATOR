const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "spectate",
  description: "to spectate a game",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.guild.id != "728065941459435573") return;
    let status = db.fetch(`status`);
    if (status === "ended") return;
    if (message.member.roles.cache.has("728078042500431952")) {
      message.member.roles.remove("728078042500431952").catch(console.error);
      message.member.roles.remove("728076283724169266").catch(console.error);
      message.member.roles.add("728078695025344514").catch(console.error);
      message.channel.send(
        `<@${message.author.id}>, please also ping the Host to remove your number role.`);
      let role = message.guild.roles.cache.find(r => r.name === `${playernumber}`);
      message.member.roles.remove(role);
      
      message.member.setNickname('Not Very Lazy Spectatorzz');
    } else {
      message.member.roles.add("728078695025344514").catch(console.error);
      message.member.setNickname('Not Very Lazy Spectatorzz');
      message.delete()
    }
  }
};
