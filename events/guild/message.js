const {prefix}= require('../../config.json')
module.exports=async(bot,message)=>{
    const Secondcommand = client.commands.get(commandName)
                || client.commands.find(cmd => cmd.aliases && cmd.aliases.include(commandName));

          if (!command) return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = bot.commands.get(cmd)
    if(command) command.run(bot,message,args)
}
