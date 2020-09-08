const db = require('quick.db');



module.exports = {
  name: "startgame",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
    if(message.guild.id != "728065941459435573")
      return;
    let hmodifier = shuffle.pick([Chess, Win Conditions, Battle Royale, Normal])
    console.log(hmodifier)
  }
  
}
