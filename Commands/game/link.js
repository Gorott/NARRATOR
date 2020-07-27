const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "link",
    description: "edit the server link",
    catgory: "game",
    run: async (bot, message, args) => {
      db.set(`link`, args[0])
      message.channel.send(`Changed the link.`)
    }
