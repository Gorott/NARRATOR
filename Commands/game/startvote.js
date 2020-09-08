const db = require('quick.db');



module.exports = {
  name: "startgame",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
    if(message.guild.id != "728065941459435573")
      return;
    let modifierlist = [ "WC", "Chess", "BR", "Normal"]
    let hmodifier = Math.floor(Math.random() * facts.length);
    message.channel.send([hmodifier])
  }
  
}
