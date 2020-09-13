const db = require('quick.db');
const Timeout = require('../../events/guild/message')
const ms = require(`ms`)
module.exports = {
    name: "protect",
    description: "protect someone",
    category: "role commands",
    timeout: 180000,
    run: async (bot, message, args) => {
        const time = db.fetch(`time`);
        if (time === `night`) {
           if (args.length === 1) {
               const protect = db.fetch(`role_${message.member.nickname}`);
               let user = message.guild.members.cache.find(x => x.nickname === args[0]);
               if (protect === `doctor`) {
                   if (user) {
                       if(message.member.nickname === user) {
                           return message.channel.send(`you cant protect yourself...`)
                           setTimeout(() => {
                            Timeout.delete(`${message.author.id}protect`)
                          }, 0)
                       } else {
                           message.channel.send(`You are now protecting ${args[0]}`)

                       }
                   }
               }
           }
        }
    }
}