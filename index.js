var express = require('express');
var app = express();
app.get("/", (request, response) => {
  response.send('Hello World!');
})

function keepAlive(){
    app.listen(3000, ()=>{console.log("Server is Ready!")});
}

const {Collection, Client, Discord} = require('discord.js');
const fs = require('fs');
const bot = new Client({
    disableEveryone: true
})
const mongoose = require('mongoose');
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
keepAlive();
bot.login(process.env.token)
