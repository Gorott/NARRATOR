const db = require('quick.db');
const { MessageEmbed} = require('discord.js');

module.exports = {
    name: "buy",
    description: "buy an item.",
    run: async (bot, message, args) => {
      let user = db.fetch(`coins_${message.author.id}_${message.guild.id}`)

      if(!args[0]) {
        message.channel.send('What do you want to buy?')
      }

      if(args[0] === "specialrole") {
        if(user < 200) {
          message.reply('You do not have enough money to buy this item!')
        } else {
          let items = db.fetch(message.author.id, { items: [] })
          db.push(message.author.id, "- Special Role")
          message.channel.send("You've succesfully bought a Special Role make sure to ping a Moderator+ to activate it")
          db.subtract(`coins_${message.author.id}_${message.guild.id}`, 200)
          
        }
      }

      if(args[0] === "CRP") {
        if(user < 1000) {
          message.reply('You do not have enough money to buy this item!')
        } else {
          let items = db.fetch(message.author.id, { items: [] })
          db.push(message.author.id, "- Custom Role Pass")
          message.channel.send("You've succesfully bought the Custom Role Pass")
          db.subtract(`coins_${message.author.id}_${message.guild.id}`, 1000)
          
        }
      }

      if(args[0] === "vchannel") {
        if(user < 1500) {
          message.reply('You do not have enough money to buy this item!')
        } else {
          let items = db.fetch(message.author.id, { items: [] })
          db.push(message.author.id, "- Voice Channel")
          message.channel.send("You've succesfully bought a Voice Channel make sure to ping a Manager+ to create it for you")
          db.subtract(`coins_${message.author.id}_${message.guild.id}`, 1500)
          
        }
      }
      
      if(args[0] === "channel") {
        if(user < 2000) {
          message.reply('You do not have enough money to buy this item!')
        } else {
          let items = db.fetch(message.author.id, { items: [] })
          db.push(message.author.id, "- Channel")
          message.channel.senf("You've successfully bought a Channel make sure to ping a Manager+ to create it for you")
          db.subtract(`coins_${message.author.id}_${message.guild.id}`,  2000)
        }
      }
    }
}

module.exports.config = {
    name: "buy",
    description: "buy an item from the shop",
    usage: "=buy <ID>",
    aliases: []
}
