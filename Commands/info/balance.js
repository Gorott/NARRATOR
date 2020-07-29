const { MessageEmbed, Discord } = require('discord.js');
const money = require('../../Database/models/money');

module.exports = {
  name: 'balance',
  description: 'Shows your balance',
  aliases: ["bal"],
  run: async (bot, message, args) => {
      mongoose.connect ("mongodb+srv://Groot:flapie123@cluster0.fhmib.mongodb.net/test" ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
      money.findOne({
      id: message.author.id
    }, (err, data) => {
      if(err) console.log(err);
      if(!data){
        newD = new money({
          Cash: 0
        })
      } else {
        let embed = new Discord.MessageEmbed()
        .setTitle("Balance Info") 
        .setDescription("Participate in Adventure games and win coins to buy roles or additional in game items.")
        .setAuthor(`${message.author.username}'s balance`, `${message.author.displayAvatarUrl()}`)
        .addFields(
          { name: 'Total Coins', value: data.cash})
          message.channel.send(embed)
        
        
        
    }
  });
}}
