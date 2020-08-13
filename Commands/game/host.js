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
        `Use the following command in <#728072732516024360>!\n` +
        `\`\`\`fix\n=joingame ${link}\n\`\`\``
      )
    achannel.send(`<@&728035352098504736>`, {embed: embed});
    db.set(`status`, `hosted`);
  }
};
