const db = require(`quick.db`);

module.exports = {
  name: "addbal",
  description: "add coins to a specfic person",
  aliases: ["add, addbalance"],
  run: async (bot, message, args) => {
    if (message.member.roles.cache.has('737131565242646558')) {
    return}
    const mention = message.mentions.users.first()
    if (message.member.roles.cache.has('728035124935000105') || message.member.roles.cache.has('728519448637735012') || message.member.roles.cache.has('728035012137713754') || message.member.roles.cache.has('728033753552650261') || message.member.roles.cache.has('728032728314019852') || message.member.roles.cache.has('728032365657587802')) {    
      if(!mention) {
      message.reply ('Please tag a person to add coins to.')
      return;
    }
    let coins = args[1]
    if(!coins) message.reply('Please specify an amount to add')
    if (isNaN(coins)) {
      message.reply('please provide a valid ammount of coins.')
      return
    }

    db.add(`coins_${mention.id}`, coins)
    message.reply(`You have given ${mention.username} ${coins} <:gold:737268058996998215>!`)
    }
  }
}
