const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "clear",
  description: "Clear channels in the game server",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.guild.id != "728065941459435573") return;
    let status = db.fetch(`status`);
    if (status !== "ended") return;
    let number = parseInt(args[0])
    if(!number) return message.channel.send("Please specify a number between 2 and 100 messages to clear!")
    if(number > 100 || number < 2) return message.channel.send("Please specify a number between 2 and 100 messages to clear!")
    let channels = message.mentions.channels
    if(!channels.array().length) return message.channel.send("Please specify channels to clear!")
    channels.forEach(c => c.bulkDelete(number))
  }
};
