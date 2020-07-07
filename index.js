const {Collection, Client, Discord} = require('discord.js');
const fs = require('fs');
const bot = new Client({
    dsableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix;
const command = Client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
          if (!command) return
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./Commands/");
const token = config.token;
bot.prefix = "=";
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});
bot.login(process.env.token)
