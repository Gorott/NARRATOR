const {prefix}= require('../../config.json')
 
module.exports = bot => {
 
 let status = db.fetch(`status`);
 if(status != ¨hosted¨) {
 bot.user.setActivity(´Werewolf Adventure with friends¨)}
  const activities = ['Werewolf Adventure with friend bots', 'Werewolf Adventure alone ;-;']
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)]
      bot.user.setActivity(activity, { type: "PLAYING"})
    }, 60000)
 
 let mcount = "750164144908533801"
 let ucount = "750164188499935293"
 let bcount = "750164222415077417"
 
 setInterval(() => {
   let mem = bot.guilds.cache.get("728031033949290636").members.cache
   bot.channels.cache.get(mcount).setName(`Members: ${mem.size}`)
   bot.channels.cache.get(ucount).setName(`Humans: ${mem.filter(x => !x.user.bot).size}`)
   bot.channels.cache.get(bcount).setName(`Bots: ${mem.filter(x => x.user.bot).size}`)
 
 }, 300000) //5 minutes
 
 
}
