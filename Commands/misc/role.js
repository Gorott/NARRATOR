const Discord = require('discord.js');
const member = message.member;

module.exports={
	name: "joingame",
	description: "you can add a role with this thing",
	catgory: "misc",
	run:async(bot,message,args)=>{
	if(message.member.roles.cache.has("@everyone")) {
		let member = message.member;
	}

    member.addRole(Members).catch(console.error)
    }
}
