const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "togglesend",
  description: "Toggle the send messages and add reactions perms for a role in the game server",
  catgory: "game",
  run: async (bot, message, args) => {
    if(!message.member.roles.cache.find(x => x.name === "Host") return message.channel.send("Only a game host can do that!")
    let role = message.mentions.roles.first()
    if(!role) role = message.guild.roles.cache.get(args[0])
    if(!role) role = message.guild.roles.cache.find(x => x.name === args[0])
    if(!role) return message.channel.send("Role not found")
    let rp = role.permissions.toArray()
    let rm
    if(rp.includes("SEND_MESSAGES") || rp.includes("ADD_REACTIONS")){
      arrayPull(rp, "SEND_MESSAGES")
      arrayPull(rp, "ADD_REACTIONS")
      rm = "Successfully removed perms from " + role
    } else {
      rp.push("SEND_MESSAGES")
      rp.push("ADD_REACTIONS")
      rm = "Successfully added perms to " + role
    }
    role.setPermissions(rp)
    message.channel.send(rm)
  }
};

function arrayPull(arr, ele) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (ele == null) {
    return arr;
  }
  let argsLen = arguments.length;
  let args = ele;
  if (argsLen > 2) {
    args = flatten([].slice.call(arguments, 1));
  } else if (typeof ele === 'string') {
    return remove(arr, ele);
  }
  for (var i = 0; i < args.length; i++) {
    remove(arr, args[i]);
  }
  return arr;
};

function remove(arr, str) {
  var idx = arr.indexOf(str);
  while (idx !== -1) {
    arr.splice(idx, 1);
    idx = arr.indexOf(str);
  }
  return arr;
}
