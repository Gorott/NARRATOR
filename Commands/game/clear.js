const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "clear",
  description: "Clear channels in the game server",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.channel.id != "728215865048301628") return;
    let status = db.fetch(`status`);
    if (status != "ended") return;
    let number = parseInt(args[0])
    if(number > 100 || number < 2 || !number) return message.channel.send("Please specify a number between 2 and 100 messages to clear!")
    let channels = message.mentions.channels
    if(!channels.array().length) return message.channel.send("Please specify channels to clear!")
    channels.forEach(c => c.bulkDelete(number))
    message.react("✅")
  }
};
