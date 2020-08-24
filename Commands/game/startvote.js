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
  }
}