const {prefix}= require('../../config.json');
const Discord= require('discord.js');

module.exports=async(bot,message)=>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = bot.commands.get(cmd)
    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmd))
    console.log(command)
    if(!command) return;
    if(command) command.run(bot,message,args)
};

