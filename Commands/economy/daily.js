const { MessageEmbed } = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db');

module.exports = {
    name: "daily",
    description: "claim your daily coins",
    run: async (bot, message, args) => {
        let timeout = 86400000
        let amount = 10
        let daily = await db.fetch(`daily_${message.author.id}`);
        let coins = await db.fetch(`coins_${message.author.id}`)
        let newCoins = (coins + amount)

        if (daily != null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
            message.channel.send(`You've already collected your daily coins, come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)

        } else {
            let embed = new MessageEmbed()
            .setTitle('**Daily Coins**')
            .setDescription(`You had: ${coins} <:gold:737268058996998215>\n You now have ${newCoins} <:gold:737268058996998215>`)
            message.channel.send(embed)

            db.add(`coins_${message.author.id}`, amount)
            db.add(`daily_${message.author.id}`, Date.now())
        }
    }
}



module.exports.config = {
    name: "daily",
    description: "daily claim 10 coins.",
    usage: "=daily",
    aliases: []
}
