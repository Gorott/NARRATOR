const {MessageEmbed, Discord} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "host",
  description: "host",
  catgory: "game",
  run: async (bot, message, args) => {
    let link = db.fetch(`link`);
    let achannel = message.guild.channels.cache.get("728044277313306716");
    achannel.send(
      `<@&728035352098504736>`);
    const _ = new MessageEmbed()
    .setTitle('New game starting!')
    .setColor('RANDOM')
    .setDescription(`Game Host: <@${message.author.id}>\nInvite Link: ${link}`);
    achannel.send(_)
  }
}
