const Discord = require('discord.js');
const db = require('quick.db');
const shuffle = require('shuffle-array');

module.exports = {
	name: 'role',
	description: 'to give out roles',
	catgory: 'game',
	run: async (bot, message, args) => {
		const rolelist = [
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

		if (playerrole !== rolelist.length) { 
		rolelist.slice(0, playerrole);
}
		const roles = shuffle(rolelist, { copy: true });
		console.log(roles);
		let i;
		for (i = 0; i < roles.length; i++) {
			//For example, "role_1" would be "seer".
			db.set(`role_${i + 1}`, roles[i]);
		}
		let priv_1 = message.guild.channels.cache.get('752865112553160716');
		console.log (priv_1)
		priv_1.send(`Your role is **${roles[0]}**.`);
		let priv_2 = message.guild.channels.cache.get('728085762062418000');
		priv_2.send(`Your role is **${roles[1]}**.`);
		let priv_3 = message.guild.channels.cache.get('728085894669795338');
		priv_3.send(`Your role is **${roles[2]}**.`);

		let priv_4 = message.guild.channels.cache.get('728086169199575151');
		priv_4.send(`Your role is **${roles[3]}**.`);
		if (roles.length === 4) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_5 = message.guild.channels.cache.get('728086288749822053');
		priv_5.send(`Your role is **${roles[4]}**.`);
		if (roles.length === 5) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_6 = message.guild.channels.cache.get('728086613363523604');
		priv_6.send(`Your role is **${roles[5]}**.`);
		if (roles.length === 6) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_7 = message.guild.channels.cache.get('728424688975609906');
		priv_7.send(`Your role is **${roles[6]}**.`);
		if (roles.length === 7) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_8 = message.guild.channels.cache.get('728424796257255494');
		priv_8.send(`Your role is **${roles[7]}**.`);
		if (roles.length === 8) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_9 = message.guild.channels.cache.get('729900330300473440');
		priv_9.send(`Your role is **${roles[8]}**.`);
		if (roles.length === 9) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_10 = message.guild.channels.cache.get('729162604567592990');
		priv_10.send(`Your role is **${roles[9]}**.`);
		if (roles.length === 10) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_11 = message.guild.channels.cache.get('729567239908491275');
		priv_11.send(`Your role is **${roles[10]}**.`);
		if (roles.length === 11) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}

		let priv_12 = message.guild.channels.cache.get('729892238624292974');
		priv_12.send(`Your role is **${roles[11]}**.`);
		if (roles.length === 12) {
			return message.channel.send(
				`<@${message.author.id}>, roles have been given out.`
			);
		}
	}
};
