const db = require(`quick.db`)

module.exports = {
  name: "settime",
  description: "set the game time",
  category: "game",
  run: async (bot, message, args) => {
            let daychat = message.guild.channels.cache.get('728082143661785150');

    let time = db.fetch(`time`);
    if (args[0] === `night` || `day`) {
      db.set(`time`, args[0]);
      message.channel.send(`the time now changed to ${args[0]}`)
      if (args[0] === `night`) {
        daychat.send(`Night time started <@728076283724169266> \n ping the host if you want to use your ability unless you have a role command.`)
        daychat.updateOverwrite("728076283724169266", {
          SEND_MESSAGES: false
        })
      } else if (args[0] === `day`) {
daychat.send(` Day time has started wait for the host to ping Alive if you want to talk.`)
        daychat.updateOverwrite("728076283724169266", {
          SEND_MESSAGES: true
        })
      }
    }
  }
}