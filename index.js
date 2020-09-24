require("dotenv").config()
const {Collection, Client, Discord} = require('discord.js');
const fs = require('fs');
const cmd = require("node-cmd");
const bot = new Client({
    disableEveryone: true
})

const config = require('./config.json')
const prefix = config.prefix;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./Commands/");
const token = config.token;
bot.prefix = "=";
["command","event"].forEach(handler=>{
    require(`./handlers/${handler}`)(bot);
});
bot.login(process.env.token).then(x => {
    cmd.get('git rev-parse --short HEAD', function(err, data, stderr){
        console.log(`Bot is online, using commit ${data}`)
    });
})
