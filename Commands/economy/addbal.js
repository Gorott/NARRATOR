const db = require(`quick.db`);

module.exports = {
  name: "addbal",
  description: "add coins to a specfic person",
  aliases: ["add, addbalance"],
  run: async (bot, message, args) => {
    if (message.member.roles.cache.has('737131565242646558')) {
    return}
    const mention = message.mentions.users.first()
    if (message.member.roles.cache.has('728035124935000105') || message.member.roles.cache.has('728519448637735012') || message.member.roles.cache.has('728035012137713754')) {    if(!mention) {
      message.reply ('Please tag a person to add coins to.')
      return
    }
    let balance = db.fetch(`coins_${message.author.id}`)
    let coins = args[1]
    if(!coins) message.reply('Please specify an amount to add')
    if (isNaN(coins)) {
      message.reply('please provide a valid ammount of coins.')
      return
    }
    message.reply(`You have given <@${mention.id}> ${coins} <:gold:737268058996998215>!They now have ${balance} <:gold:737268058996998215>!`)
    db.add(`coins_${message.author.id}`, coins)
    }
  }
}
