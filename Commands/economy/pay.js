const economy = ('../../Database/models/economy')

module.exports = {
  name: "pay",
  description: "pay someone a certain amount of coins.",
  run: async (bot, message, args) => {
    const { guild, member } = message
    
    const target = message.mentions.users.first()
    if(!target) {
      message.reply('Please specify a person to give coins to.')
      return
    }
    
    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of coins to give to that person.')
    return
    }
    
    const coinsOwned = await economy.getCoins(guild.ID, member.ID)
    if (coinsOwned < coinsToGive) {
      message.reply(`you do not have ${coinsToGive} coins`)
      return
    }
    
    const remainingCoins = await economy.addCoins(
      guild.ID,
      member.ID,
      coinsToGive * -1
    )
      
    const newBalance = await economy.addCoins (
      guild.ID,
      member.ID,
      coinsToGive
    )
      
    message.reply(`You have given <@${target.id}> ${coinsToGive} coins! They now have ${newBalance} coins! You have ${remainingCoins} coins!`)
  }
}