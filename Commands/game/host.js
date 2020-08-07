const { MessageEmbed, Discord } = require("discord.js");
const db = require("quick.db")

module.exports = {
  name: "host",
  description: "to host",
  catgory: "game",
  run: async (bot, message, args) => {
    let link = db.fetch(`link`);
    let achannel = message.guild.channels.cache.get("728044277313306716");
    const embed = new MessageEmbed()
      .setTitle("New game starting!")
      .setColor("#007167")
      .setDescription(
        `Game Host: <@${message.author.id}>\nInvite Link: [Click!](${link})`
      );
    achannel.send(`<@&728035352098504736>`, {embed: embed});
    db.set(`status`, `hosted`);
  }
};
