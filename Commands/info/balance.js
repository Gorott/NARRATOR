const discord = require('discord.js');

module.exports = {
    name: "balance",
    category: "info",
    aliases: ["bal"],
    description: "check your balance.",
    run: async (bot, message, args) => {

        const UserData = await client.models.user.findMyID(message.author.id)
        if(!UserData) await client.models.user.create({ _id: message.author.id })

        let money = userData.money

        message.channel.send(`You have ${money} coins!`)
    }
}
