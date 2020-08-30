const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "bal",
  description: "Check your balance",
  aliases: ["balance"],
  run: async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    let coins = db.fetch(`coins_${user.id}_${message.guild.id}`)

    if (!coins){
      db.set(`coins_${user.id}_${message.guild.id}`, 0)
      coins = 0
    }
    
    const embed = new MessageEmbed()
    .setTitle ('How do you get coins and what can you do with coins?')
    .setDescription ('You can earn coins by playing adventure games with those coins you can buy aditional items or roles')
    .setAuthor (`${user.username}'s balance`, `${user.displayAvatarURL()}`)
    .addFields (
      {name: "Total Coins:", value: `You have ${coins} <:gold:737268058996998215>!`}
    )
    message.channel.send(embed)
  }
}

module.exports.config = {
    name: "bal",
    description: "check your or someone else his balance",
    usage: "=balance <ping user>",
    aliases: ['balance']
}

