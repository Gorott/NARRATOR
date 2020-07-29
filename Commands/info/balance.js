const { MessageEmbed, Discord } = require('discord.js');
const Money = require('../../Database/models/money');

module.exports = {
  name: 'balance',
  description: 'Shows your balance',
  aliases: ["bal"],
  run: async (bot, message, args) => {
    Money.findOne({
      userID: message.author.id,
      serverID: message.guild.id
    });
      const memberInfo = new MessageEmbed()
           .setTitle(':moneybag: Balance Info')
           .setAuthor(`${message.author.username}'s balance`, `${message.author.displayAvatarURL()}`)
           .setDescription('Participate in Adventure games, and win  to buy roles or additional ')
     

      if (!Money) {
        memberInfo.addField('Total Coins', 0);
      }
      else {
        memberInfo.addField('Total Coins', Money.Money);
      };

      message.channel.send(memberInfo);
    }
  }