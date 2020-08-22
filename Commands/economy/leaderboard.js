const db = require(`quick.db`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "leaderboard",
    description: "Check the sever's leaderboard",
    aliases: ['lb'],
    run: async (bot, message, args) => {
        let coins = db.startsWith(`coins_${message.guild.id}`, { sort: '.data'})
        let content = "";
    
        for (let i = 0; i < coins.length; i++) {
            let user = bot.users.cache.get(coins[i].ID.split('_')[2]).username
    
          
    
            content += `${i+1}. ${user} ~ ${coins[i].data}\n`
        
          }
    
        const embed = new MessageEmbed()
        .setDescription(`**${message.guild.name}'s Coin Leaderboard**`)
        .addField()
        .setColor(" b52ef")
    
        message.channel.send(embed)
      }
    
    }
