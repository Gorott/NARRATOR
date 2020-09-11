const db = require('quick.db')
const { i, roles} = require('../role.js')

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  run: async (bot, message, args) => {
    const seer = db.fetch(`role_${message.member.displayname}`, seer)
    const mention = message.mentions.users.first()
    if(!seer) return;
    if(seer) {
      if(!mention) {
        message.channel.send("You didn't mention a person!")
      }
      const seerChecked = db.fetch(`role_${mention.displayname}`, roles[i])
      message.channel.send(`${mention.displayname} is ${seerChecked}`)
      
    }
  }
}