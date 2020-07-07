const Discord = require('discord.js');

module.exports={
	name: "joingame",
	description: "you can add a role with this thing",
	catgory: "misc",
	run:async(bot,message,args)=>{
	const member = message.member;
        if(message.guild.id === "728065941459435573") return;
    if(message.member.roles.cache.has("@everyone")) {
		let member = message.member;
	}
	if(message.member.roles.cache.has("729900329659007070")) {
                member.roles.remove("729900329659007070").catch(console.error)
                member.roles.add("729900329659007074").catch(console.error)
		} else {
    member.roles.add("729900329659007074").catch(console.error)
    }}
}
