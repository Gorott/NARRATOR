const economy = require('../../Database/models/economy')

module.exports = {
  name: "addbal",
  description: "add coins to a specfic person",
  aliases: ["add, addbalance"],
  run: async (bot, message, args) => {
    const mention = message.mentions.users.first()
    
    if(!mention) {
      message.reply ('Please tag a person to add coins to.')
      return
    }
    
    const coins = args[1]
    if (isNaN(coins)) {
      message.reply('please provide a valid ammount of coins.')
      return
    }
    
    const guildID = message.guild.id
    const userID = mention.id
    
    const newcoins = await economy.addCoins(guildID, userID, coins)
    
    message.reply(`You have given <@${userID}> ${coins}<:gold:737268058996998215>!They now have ${newcoins}<:gold:737268058996998215>!`)
  }
}
