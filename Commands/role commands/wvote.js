const db = require('quick.db')

module.exports = {
    name: "wvote",
    description: "werewolf vote",
    category: "role commands",
    run: async (bot, message, args) => {
        const time = db.fetch(`time`)
        const werewolf = db.fetch(`role_${message.member.nickname}`)
        if(werewolf === `werewolf` || `alpha werewolf` || `shaman werewolf` || `wolf seer`) {
            if(time === `night`) {
            let user = message.guild.members.cache.find(
                x => x.nickname === args[0])
                if (user) {
                    if (user.roles.cache.has("728077261085081660")) {
                        message.channel.send(`this person already is dead.`)
                    } else {
                        const wchat = 
                    }
                }
            }
        }
    }
}