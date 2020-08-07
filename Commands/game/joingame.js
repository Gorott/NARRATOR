const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "joingame",
  description: "to join a game from the server",
  catgory: "game",
  run: async (bot, message, args) => {
      let status = db.fetch(`status`);
      let link = db.fetch(`link`)
      if (status == "ended") {
        return message.channel.send("That game already ended") 
      }
      if (message.guild.id != "728031033949290636") return;
      if (message.channel.id != "728072732516024360") {
          return message.channel.send(`<@${message.author.id}> Please use this command in <#728072732516024360>!`);
      }

      if (message.member.roles.cache.has("741097460486897664")) {
          return message.channel.send("You already have the Game Joined role!");
      }

      if (args[0] === link) {
          message.members.roles.add("741097460486897664");
          message.channel.send("You joined the game go to <#741098289847468082>")
      } else {
          message.channel.send("Please provide a link.")
      }
  }
}