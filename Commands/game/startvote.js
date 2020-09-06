const db = require('quick.db');



module.exports = {
  name: "startvote",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
const Sandbox = "1️⃣";
const Classic = "2️⃣";
const Random =  "3️⃣";
    let msg = await message.channel.send(`Sandbox, Classic or Random?`)
    await msg.react(Sandbox);
    await msg.react(Classic);
    await msg.react(Random);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === Sandbox  || reaction.emoji.name === Classic || reaction.emoji.name === Random, {time: 15000}).then(collected => {
      const reaction = collected.first();
      
      if(reaction.emoji.name ==️= 1️⃣){
        message.reply('Roles for Sandbox mode have been given out!')
      }
      if(reaction.emoji.name === 2️⃣){
        message.reply('Roles for Classic mode jave been given out!')
      }
      if(reaction.emoji.name === 3️⃣){
        message.reply('What roles do you want to use for Random mode?')
      }
    })
    
    
  }
}