const Discord = require('discord.js');
const db = require('quick.db');
const shuffle = require('shuffle-array');

module.exports = {
	name: 'role',
	description: 'to give out roles',
	catgory: 'game',
	run: async (bot, message, args) => {
		let rolelist = [
			'aura seer',
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

		if (message.channel.id != '728215865048301628') return;
		let playerrole = message.guild.roles.cache.get('728078042500431952')
			.members;

		///A game cannot start with less than 4 players.
		if (playerrole.size < 4) {
			return message.channel.send(
				`<@${message.author.id}>, there are less than 4 players...`
			);
		}
		rolelist = rolelist.slice(0, playerrole.size)
		const roles = shuffle(rolelist);
		console.log(roles);
		let i;
		for (i = 0; i < roles.length; i++) {
			//For example, "role_1" would be "seer".
			db.set(`role_${i + 1}`, roles[i]);
			let chan = message.guild.channels.cache.find(x => x.name === `${i}`)
			chan.send(`Your role is **${roles[0].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}**.`);
		}
		return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
	}
};
