const economy = require('../../Database/models/economy.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "pay",
  description: "pay someone coins",
  run: async (bot, message, args) => {
    const target = message.mentions.users.first()
    const targetID = target.id
    if (!target) {
      message.reply('Please specify a person to give coins to.')
      return
    }
    const guildID = message.guild.id
    const userID = target.id
    
    const coinsToGive = args[1]
    if (isNaN(coinsToGive || coinsToGive < 1)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }
    
    const coinsOwned = await economy.getCoins(guildID, userID)
    if (coinsOwned < coinsToGive) {
      message.reply(`You need ${coinsToGive}<:gold:737268058996998215>!`)
      return
    }
    
    const remainingCoins = await economy.addCoins(
      guildID,
      userID,
      coinsToGive * -1
    )
    const newBalance = await economy.addCoins(guildID, targetID, coinsToGive)
    
    const embed = new MessageEmbed()
    .setTitle ('Transaction Successfully Completed ')
    .setDescription (`You payed coins to: <@${targetID}>\n You payed: ${coinsToGive}<:gold:737268058996998215>\n They now have: ${newBalance}<:gold:737268058996998215>\n You had: ${coinsOwned}<:gold:737268058996998215>\n You now have: ${remainingCoins}<:gold:737268058996998215>`)
    
    message.channel.send(embed)
  }
}