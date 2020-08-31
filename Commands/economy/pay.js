const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'pay',
	description: 'pay someone a certain amount of coins.',
	run: async (bot, message, args) => {
		let coins = db.fetch(`coins_${message.author.id}_${message.guild.id}`);
		const target = message.mentions.users.first();
		if (!target) {
			message.reply('Please specify someone to give coins to.');
			return;
		}

		if (!args[1]) {
			message.reply('Please specify an amount.');
			return;
		}

		if (coins < args[1]) {
			return message.channel.send(
				"You don't have enough coins get some more coins first"
			);
		}
		const embed = new MessageEmbed()
			.setTitle('Transaction Complete!')
			.setDescription(
				`You had: ${coins} <:gold:737268058996998215> \n You gave: ${
					args[1]
				} <:gold:737268058996998215> to ${target.username}`
			);

		message.channel.send(embed);
		db.add(`coins_${target.id}_${message.guild.id}`, args[1]);
		db.subtract(`coins_${message.author.id}_${message.guild.id}`, args[1]);
	}
};

module.exports.config = {
	name: 'pay',
	description: 'pay someone an amount of coins',
	usage: '=pay <ping user> <amount>',
	aliases: []
};
