const {prefix}= require('../../config.json');
const Discord= require('discord.js');
const client= new Discord.Client();
module.exports=async(bot,message)=>{
let command = Client.commands.get(commandName)
                || Client.commands.find(cmd => cmd.aliases && cmd.aliases.include(commandName));

          if (!command) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    command = bot.commands.get(cmd)
    if(command) command.run(bot,message,args)
};
