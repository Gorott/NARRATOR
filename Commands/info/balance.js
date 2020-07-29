const economy = require('../../Database/models/economy')
const {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'balance',
  description: 'Check your balance.',
  aliases: ["bal"],
  run: async (bot, message, args) => {         
    const target = message.author
    const targetId = target.id
    
    const guildID = message.guild.id
    const userID = target.id 

    const coins = await economy.getCoins(guildID, userID)
    const embed = new MessageEmbed()
    .setTitle("<:gold:737268058996998215>Balance info<:gold:737268058996998215>")
    .setAuthor(`${message.author.username}'s balance`, `${message.author.displayAvatarURL()}`)
    .setDescription("Participate in Adventure games and win <:gold:737268058996998215> to buy roles or additional in game items.")
    .addFields(
          { name: 'Total Gold', value: `You have ${coins}<:gold:737268058996998215>!`})

    message.channel.send(embed);
  }
}
