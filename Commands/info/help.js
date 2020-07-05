const Discord = require ('discord.js');
let helpArray = message.content.split(" ");
let helpArgs = helpArgs.slice(1);


if(helpArgs[0]) {
	let command = helpArgs[0];
	
	if(bot.commands.has(command)) {
		
		command = bot.command.get(command);
		var embed = new Discord.MessageEmbed()
		.setAuthor (`${command.config.name} Command`)
		.setThumbnail (bot.user.displayAvatarURL)
		.setDescription(`
		- **Commands Description:** __${command.config.description || "There is no description for this command."}__
		- **Commands Usage:** __${command.config.usage} || "No Usage."__
		- **Commands Aliases:** __${command.config.alliases} || "No Alliases"__
		`)
		.setColor(RANDOM)
		
		message.channel.send(embed);
	}}
}

module.exports.config = {
	name: "help",
	description: "",
	usage: "=help",
	aliases: []
}
