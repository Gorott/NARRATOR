const Discord = require('discord.js'),
      moment = require('moment'),
      db = require("quick.db")
      

module.exports = {
	name: "eval",
	description: "Evaluate JavaScript code!",
  category: "misc",
	run: async (bot, message, args) => {
    if (!["544805979179712522", "439223656200273932", "584311318207660042"].includes(message.author.id))
      return undefined
    
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(evaled, {code:"xl", "split": " "});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
    
	}
}
