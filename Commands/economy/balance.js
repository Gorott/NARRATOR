const economy = require('../../Database/models/economy.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "bal",
  description: "Check your balance",
  aliases: ["balance"],
  run: async (bot, message, args) => {
    const target = message.author
    const targetID = target.id
    
    const guildID = message.guild.id
    const userID = target.id
    
    const coins = await economy.getCoins(guildID, userID)
    
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
