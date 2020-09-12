const db = require('quick.db')
const { i, roles, seer } = require('../game/role.js')
const Discord = require('discord.js')

module.exports = {
  name: "check",
  description: "check someone",
  category: "role commands",
  run: async (bot, message, args) => {
    const seercheck = db.fetch(`role_${message.member.nickname}`, seer)
    const mention = message.mentions.users.first()
    if (!seer) return message.channel.send('That person is... ')
    if (seer) {
      if (!mention) {
        message.channel.send("You didn't mention a person!")
      }
      const seerChecked = db.fetch(`role_${message.mentions.members.nickname}`, roles[i])
      message.channel.send(`${mention.displayname} is ${seerChecked}`)

    }
  }
}