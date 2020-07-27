const db = require ('quick.db')
const Discord = require ('discord.js')

module.exports={
  name: "balance",
  description: "check your balance",
  aliases: ["bal"],
  run: async(bot,message,args)=>{
    let user = message.mentions.members.first || message.member;
    
    let bal = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
    if (bal === null) bal = 0;
    
    message.channel.send(`${user} you have ${bal}!`)
  }
}
