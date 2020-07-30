const economy = ('../../Database/models/economy')

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
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give.')
      return
    }
    
    const coinsOwned = await economy.getCoins(guildID, memberID)
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
    
    message.reply(
      `You have given <@${target.id}> ${coinsToGive} coins! They now have ${newBalance} coins and you have ${remainingCoins} coins!`
    )
  },
}
