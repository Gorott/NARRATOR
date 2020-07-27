const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "host",
  description: "host",
  catgory: "game",
  run: async (bot, message, args) => {
    let link = db.fetch(`link`);
    let achannel = message.guild.channels.cache.get("728044277313306716");
    achannel.send(
      `<@&728035352098504736>`)
    achannel.send(`An Challenge game is starting now\nGame Host: <@${message.author.id}>\nInvite Link: ${link}`
    );
  }
}
