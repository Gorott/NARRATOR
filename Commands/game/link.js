const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "link",
  description: "to edit the server link",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.channel.id != "729900329944088600") return;
    let link = db.fetch(`link`);
    message.channel.send(
      `<@${message.author.id}> has changed the link.\nOld link: ${link}\nNew link: ${args[0]}`
    );
    db.set(`link`, args[0]);
  }
};
