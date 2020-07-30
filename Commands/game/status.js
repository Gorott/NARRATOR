const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "status",
  description: "to change a status",
  catgory: "game",
  run: async (bot, message, args) => {
    if (message.channel.id != "729900329944088600") return;
    let status = db.fetch(`status`);
    if (args[0] === `hosted` || `started` || `ended`) {
      db.set(`status`, args[0]);
      message.channel.send(
        `The status has changed from "${status}" to "${args[0]}"`
      );
    } else {
      message.channel.send(
        `The status now is ${status}\nStatus List: **hosted**, **started**, **ended**.`
      );
    }
  }
};
