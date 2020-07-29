const economy = require('../../Database/models/economy')
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'balance',
  description: 'Check your balance.',
  aliases: ["bal"],
  run: async (bot, message, args) => {         
    const target = message.author
    const targetId = target.id
    
    const coins = await economy.getCoins(guildID, userID)
    const embed = new MessageEmbed()
    .setTitle("Balance info")
    .setAuthor(`${message.author.username}'s balance`, `${message.author.displayAvatarURL()}`)
    .setDescription("Participate in Adventure games and win coins to buy roles or additional in game items.")
    .addFields(
          { name: 'Total Coins', value: `You have ${coins} coins!`})

    message.channel.send(embed);
  }
}
