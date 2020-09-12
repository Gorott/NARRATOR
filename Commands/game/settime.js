const db = require(`quick.db`);

module.exports = {
  name: "settime",
  description: "set the game time",
  category: "game",
  run: async (bot, message, args) => {
    if (args[0] === `night` || `day`) {
      let time = db.fetch(`time`);
      db.set(`time`, args[0]);
      message.channel.send(`the time now is changed to ${args[0]}`);
      let daychat = message.guild.channels.cache.get("728082143661785150");
      if (args[0] === `night`) {
        daychat.send(
          `<@728076283724169266>Night time has started.\nPing the Host to use your ability if your role does not have a command.`
        );
        daychat.updateOverwrite("728076283724169266", {
          SEND_MESSAGES: false
        });
      }
      if (args[0] === `day`) {
        daychat.send(
          `Day time has started. Do not talk until Alive is pinged by the Host.`
        );
        daychat.updateOverwrite("728076283724169266", {
          SEND_MESSAGES: true
        });
      }
    }
  }
};
