const {prefix}= require('../../config.json')
 
module.exports=bot=>{
  const activities = ['Werewolf Adventure with friend bots', 'Werewolf Adventure alone ;-;']
    setInterval(() => {
      let activity = activities[Math.floor(Math.random() * activities.length)]
      bot.user.setActivity(activity, { type: "PLAYING"})
    }, 60000)
}