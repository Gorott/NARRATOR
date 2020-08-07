const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "clearjoin",
  description: "Clear the Game Joined! role from users",
  catgory: "game",
  run: async (bot, message, args) => {
      let status = db.fetch(`status`);
      let link = db.fetch(`link`)
      if (status !== "ended") {
        return message.channel.send("That game hasn't ended yet! Set the game to ended with `=status ended` first") 
      }
      if (message.guild.id != "728031033949290636") return;
      let mem = message.guild.members.cache.filter(x => x.roles.cache.has("741097460486897664"))
      mem.forEach(x => {
        mem.roles.remove("741097460486897664")
      })
      message.channel.send("Done! I removed the role from " + mem.array.length + " members.")
  }
}
