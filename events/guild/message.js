const {prefix}= require('../../config.json');
const Discord= require('discord.js');

module.exports=async(bot,message)=>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    if(!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if(cmd.length == 0 ) return;

    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if(!command) return
    
try {
    await command.run(bot,message,args)
} catch (error) {
    console.error(error)
    await bot.channels.cache.get("746825240499191939").send(
    new Discord.MessageEmbed()
    .setDescription(
    `An error occured when ${message.author} attempted the following command: \`${
      message.content.replace(/(`)/g, "\$1")
    }\``
  )
  .addField(
    "Error Description",
    `\`\`\`${error.stack}\`\`\``
  )
)

await message.channel.send(`❌ An error occurred when trying to execute this command. Please contact a member of the Bot Development Team.`)
}
    
};

