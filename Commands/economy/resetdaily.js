const db = require(`quick.db`);

module.exports = {
  name: "resetdaily",
  description: "Reset a person's daily timer",
  aliases: ["add, addbalance"],
  run: async (bot, message, args) => {
    if(message.member.roles.cache.has("737221189197365270") || message.member.roles.cache.has("730263404429967370")){
      const mention = message.mentions.users.first()
      if(!mention) {
        message.reply ('Please tag a person to reset their daily timer.')

      db.set(`daily${mention.id}_${message.guild.id}`, 0)
      message.reply(`You have reset ${mention.username}'s daily timer!`)
    }
  }
}
