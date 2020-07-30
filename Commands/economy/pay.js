const economy = ('../../Database/models/economy.js')

module.exports = {
  name: "pay",
  description: "pay someone a certain amount of coins.",
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
      {name: "Total Coins:", value: `You have ${coins} coins!`}
    )
    message.channel.send(embed)
  }
}
