const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "startvote",
  description: "start voting.",
  category: "game",
  run: async (bot, message, args) => {
    let filter = (reaction) => {
      return reaction.emoji.name === '1️⃣'
    };

    const collector = message.createReactionCollector(filter, { time: 15000 });

    collector.on('end', collected => {
      console.log(`Collected ${collected.size} 1️⃣`);
      let classic = collected.size
    });

    let filter2 = (reaction2) => {
      return reaction2.emoji.name === '2️⃣'
    };




    collector.on('end', collected2 => {
      console.log(`Collected ${collected2.size} 2️⃣`);
      let sandbox = collected2.size
    });

        let filter3 = (reaction3) => {
      return reaction3.emoji.name === '3️⃣'
    };



    collector.on('end', collected3 => {
      console.log(`Collected ${collected3.size} 3️⃣`);
      let random = collected3.size
    });
    
    let result = Math.max(classic, sandbox, random)
    console.log(result)
  }
}