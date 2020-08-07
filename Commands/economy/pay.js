const economy = require('../../Database/models/economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "pay",
description: "pay someone a certain amount of coins.",
run: async (bot, message, args) => {
  const { guild, member } = message
const target = message.mentions.users.first()
if (!target) {
message.reply('Please specify someone to give coins to.')
return
}

const coinsToGive = args[1]
if (isNaN(coinsToGive) || coinsToGive < 1) {
message.reply('Please provide a valid number of coins to give.')
return
}

const coinsOwned = await economy.getCoins(guild.id, member.id)
if (coinsOwned < coinsToGive) {
message.reply(`You do not have ${coinsToGive} coins!`)
return
}

const remainingCoins = await economy.addCoins(
guild.id,
member.id,
coinsToGive * -1
)
const newBalance = await economy.addCoins(guild.id, target.id, coinsToGive)
 const embed = MessageEmbed()
 .setTitle = "Transaction Complete!"
 .setDescription = `You Had: ${coinsOwned}`/n `You gave: ${coinsToGive}` /n `You now have: ${remainingCoins}` /n `${member.username} now has: ${newBalance}`
 
 channel.send(embed)

},
}
