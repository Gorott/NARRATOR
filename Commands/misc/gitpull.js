const Discord = require('discord.js'),
      moment = require('moment'),
      db = require("quick.db"),
      cmd = require("node-cmd")
      

module.exports = {
	name: "gitpull",
	description: "Evaluate JavaScript code!",
  category: "misc",
	run: async (bot, message, args) => {
    if (!["544805979179712522", "439223656200273932", "584311318207660042"].includes(message.author.id))
      return undefined
    message.channel.send("Updating bot...")
    cmd.run("cd /home/sd/wwoa|git pull origin master|pm2 restart " + process.env.pm_id)
    
	}
}
