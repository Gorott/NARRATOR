const Discord = require('discord.js');

module.exports={
	name: "joingame",
	description: "you can add a role with this thing",
	catgory: "misc",
	run:async(bot,message,args)=>{
	const member = message.member;
        if(message.member.roles.cache.has("@everyone")) {
		let member = message.member;
	}

    member.roles.add("728078042500431952").catch(console.error)
    }
}
