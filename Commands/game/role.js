const Discord = require('discord.js');
const db = require('quick.db');
const shuffle = require('shuffle-array');

module.exports = {
	name: 'role',
	description: 'to give out roles',
	catgory: 'game',
	run: async (bot, message, args) => {
		let rolelist = [
			'seer',
			'medium',
			'jailer',
			'werewolf',
			'doctor',
			'alpha werewolf',
			'seer',
			'headhunter',
			'bodygaurd',
			'gunner',
			'shaman werewolf',
			'aura seer',
			'serial killer',
			'priest',
			'wolf seer',
			'seer'
		];

		if (message.channel.name != "narrator-commands") return;
		let playerrole = message.guild.roles.cache.find(x => x.name === "Alive")
			.members;

		///A game cannot start with less than 4 players.
		if (playerrole.size < 4) {
			return message.channel.send(
				`<@${message.author.id}>, there are ${playerrole.size == 0 ? "no" : `${playerrole.size}`} users in the Alive role. Make sure all your players are ready and have their number role and the Alive role`
			);
		}
		rolelist = rolelist.slice(0, playerrole.size)
		const roles = shuffle(rolelist);
		console.log(roles);
		let i;
		for (i = 0; i < roles.length; i++) {
			//For example, "role_1" would be "seer".
			db.set(`role_${i + 1}`, roles[i]);
			let chan = message.guild.channels.cache.find(x => x.name === `${i + 1}`)
			chan.send(`Your role is **${roles[i].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}**.`);
		}
		return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
	}
};
