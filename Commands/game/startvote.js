const db = require('quick.db');
const Sandbox = "1️⃣";
const Classic = "2️⃣";
const Random = "3️⃣";


module.exports = {
  name: "startvote",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
    let msg = await message.channel.send(`Sandbox, Classic or Random?`)
    await msg.react(Sandbox);
    await msg.react(Classic);
    await msg.react(Random);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === Sandbox  || reaction.emoji.name === Classic || reaction.emoji.name === Random, {time: 15000});
    message.channel.send('Voting Complete!')
    
    let cSandbox = reactions.get(Sandbox).count-1
    console.log(cSandbox)
    console.log(reactions.keyArray())
  }
}