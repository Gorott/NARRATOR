const Discord = require("discord.js");

module.exports ={
	name: "help",
	description: "???",
	category: "info",
        run: async (bot, message, args)=>{
     //We have to set a argument for the help command beacuse its going to have a seperate argument.
     let helpArray = message.content.split(" ");
     let helpArgs = helpArray.slice(1);

     //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
     if(!helpArgs[0]) {
         var embed = new Discord.MessageEmbed()
             .setAuthor(`Here is the Avaible Commands to use:`)
             .setDescription('`help | ping | announce | timer | 8ball | bal | buy | shop | pay | inventory | daily `')
             .addFields({ name: 'Prefix', value: '`=`', inline: true})
             .setColor('#RANDOM')
            
         message.channel.send(embed);
     }

     //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
     if(helpArgs[0]) {
         let command = helpArgs[0];

         if(bot.commands.has(command)) {
            
             command = bot.commands.get(command);
             var embed = new Discord.MessageEmbed()
             .setAuthor(`${command.config.name} Command`)
             .setDescription(`
             - **Command's Description** ${command.config.description || "There is no Description for this command."}
             - **Command's Usage:** ${command.config.usage || "No Usage"}
             - **Command's Aliases:** ${command.config.aliases || "No Aliases"}
             `)
             .setColor('#2EFF00')

         message.channel.send(embed);        
       }}
   }
}
module.exports.config = {
    name: "help",
    description: "use this command if you need to know how a command works",
    usage: "=help",
    aliases: []
}
