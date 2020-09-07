const {prefix}= require('../../config.json')
const db = require('quick.db') 
module.exports = bot => {
 setInterval(() => {
 let status = db.fetch(`status`);
 if(status === "hosted") { 
 bot.user.setActivity("Werewolf Adventure with friends")
  } else { 
      bot.user.setActivity("Werewolf Adventure alone ;-;")
    }
    }, 10000)
}
 let mcount = "750164144908533801"
 let ucount = "750164188499935293"
 let bcount = "750164222415077417"
 
 setInterval(() => {
   let mem = bot.guilds.cache.get("728031033949290636").members.cache
   bot.channels.cache.get(mcount).setName(`Members: ${mem.size}`)
   bot.channels.cache.get(ucount).setName(`Humans: ${mem.filter(x => !x.user.bot).size}`)
   bot.channels.cache.get(bcount).setName(`Bots: ${mem.filter(x => x.user.bot).size}`)
 
 }, 300000) //5 minutes
 
 
