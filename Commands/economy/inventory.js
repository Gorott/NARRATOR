const db = require('quick.db');
const { MessageEmbed} = require('discord.js');

module.exports = {
    name: "inventory",
    description: "check your inventory.",
    run: async (bot, message, args) => {
    let items = db.get(message.author.id)
    let user = message.mentions.users.first() || message.author
    if(items === null) items = 'This user has nothing.'

    let embed = new MessageEmbed()
    .setTitle('inventory')
    .setAuthor(`${message.author.username}'s inventory`, `${message.author.displayAvatarURL()}`)
    .setDescription(items)
    message.channel.send(embed)
  }
}

module.exports.config = {
    name: "inventory",
    description: "check what is in your inventory",
    usage: "=inventory",
    aliases: []
}
