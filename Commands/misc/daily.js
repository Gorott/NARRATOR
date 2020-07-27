const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receive a daily reward of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 50;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already claimed your daily reward. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`Successfully added ${amount} <:gold:737268058996998215> to your account`)
        }
    }
}
