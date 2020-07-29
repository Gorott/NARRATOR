const economy = require('../../Database/models/economy')
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'balance',
  description: 'Check your balance.',
  aliases: ["bal"],
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("Balance info")
    .setAuthor(`${message.author.username}'s balance`, `${message.author.displayAvatarUrl()}`)
    .setDescription("Participate in Adventure games and win coins to buy roles or additional in game items.")
    .addFields(
          { name: 'Total Coins', value: `You have ${coins} coins!`})
          
    const target = message.author
    const targetId = target.id
    
    const coins = await economy.getCoins(guildID, userID)
    message.channel.send(embed);
  }
}
