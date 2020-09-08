const db = require('quick.db');



module.exports = {
  name: "startgame",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
    if(message.guild.id != "728065941459435573")
      return;
    let modifierlist = [ "Win Condition", "Chess", "Battle Royale", "Normal"]
    let hmodifier = modifierlist[Math.floor(Math.random() * modifierlist.length)];
    db.set(`gamemode`, hmodifier)
    message.channel.send(`The Huge Modifier has been picked and it is... ${hmodifier}`)
  }
  
}
