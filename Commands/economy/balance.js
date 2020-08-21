const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "bal",
  description: "Check your balance",
  aliases: ["balance"],
  run: async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    let coins = db.fetch(`coins_${user.id}`)

    if (coins === null) coins = 0
    
    const embed = new MessageEmbed()
    .setTitle ('How to get coins and what can you do with coins?')
    .setDescription ('You can earn coins by playing adventure games with those coins you can buy aditional items or roles')
    .setAuthor (`${message.author.username}'s balance`, `${message.author.displayAvatarURL()}`)
    .addFields (
      {name: "Total Coins:", value: `You have ${coins}<:gold:737268058996998215>!`}
    )
    message.channel.send(embed)
  }
}
