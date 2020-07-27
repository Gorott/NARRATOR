const Discord = require('discord.js')

module.exports = {
    name: "spectate",
    description: "to spectate a game",
    catgory: "game",
    run: async (bot, message, args) => {
        const member = message.member;
        if (message.guild.id != "729900329403154463") return
        if (message.member.roles.cache.has("729900329659007074")) {
            member.roles.remove("729900329659007074").catch(console.error)
            member.roles.add("729900329659007070").catch(console.error)
        } else {
            member.roles.add("729900329659007070").catch(console.error)
        }
    }
}
