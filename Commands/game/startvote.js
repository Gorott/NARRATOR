const db = require('quick.db');



module.exports = {
  name: "startvote",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
const Sandbox = bot.emoji.cache.get( 1️⃣ )
const Classic = bot.emoji.cache.get( 2️⃣ )
const Random =  bot.emoji.cache.get( 3️⃣ )
    let msg = await message.channel.send(`Sandbox, Classic or Random?`)
    await msg.react(Sandbox);
    await msg.react(Classic);
    await msg.react(Random);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === Sandbox  || reaction.emoji.name === Classic || reaction.emoji.name === Random, {time: 15000});
    message.channel.send('Voting Complete!')
    
    let cSandbox = reactions.get(Sandbox).count-1
    console.log(cSandbox)
  }
}