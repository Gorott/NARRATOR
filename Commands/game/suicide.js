const db = require('quick.db');
const role = require('./role.js');
const i = require('./role.js');
const roles = require('./role.js');

const discord = require('discord.js');
const {
	priv_1,
	priv_2,
	priv_3,
	priv_4,
	priv_5,
	priv_6,
	priv_7,
	priv_8,
	priv_9,
	priv_10,
	priv_11,
	priv_12
} = require('./role.js');
module.exports = {
	name: 'suicide',
	description: 'kill someone or do suicide',
	category: 'game',
	run: async (bot, message, args) => {
		db.fetch(`role_${i + 1}`, roles[i]);
		let Alive = message.member.roles.cache.has('728076283724169266');

		if (Alive) {
			message.member.roles.remove('728076283724169266');
			message.member.roles.add('728077261085081660');

			let daychat = message.guild.channels.cache.get('728082143661785150');
			daychat.send(`<@${message.author.id}> did suicide`);
		} else {
		  message.channel.send('Congratulations, you committed suicide while you are already dead.')
		}
	} 
};
