const Discord = require("discord.js");
const db = require("quick.db");
const shuffle = require("shuffle-array");

module.exports = {
name: "role",
description: "to give out roles",
catgory: "game",
run: async (bot, message, args) => {
if (message.channel.id != "729900329944088600") return;
let playerrole = message.guild.roles.cache.get("729900329659007074")
.members;

///A game cannot start with less than 4 players.
if (playerrole.size < 4) {
return message.channel.send(
`<@${message.author.id}, there are less than 4 players...`
);
}
switch(true) {
case playerrole == 4:
let rolelist = ["aura seer", "medium", "jailer", "werewolf"]
break;
case playerrole == 5:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor"]
break;
case playerrole == 6:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "doctor", "alpha werewolf"]
break;
case playerrole == 7: 
rolelist = ["aura seer", "medium", "jailer", "werewolf", "doctor", "alpha werewolf", "seer"]
break;
case playerrole == 8:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "fool", "headhunter"]
break;
case playerrole == 9:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd"]
break;
case playerrole == 10:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "fool", "bodygaurd", "gunner"]
break;
case playerrole == 11: 
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "Shaman Werewolf"]
break;
case playerrole == 12:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "shaman werewolf", "aura seer"]
break;
case playerrole == 13:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "shaman werewolf", "aura seer", "serial killer"]
break;
case playerrole == 14:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "shaman werewolf", "aura seer", "serial killer", "priest"]
break;
case playerrole == 15:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "shaman werewolf", "aura seer", "serial killer", "priest", "wolf seer"]
break;
case playerrole == 16:
rolelist = ["aura seer", "medium", "jailer", "werewolf", "docotor", "alpha werewolf", "seer", "headhunter", "bodygaurd", "gunner", "shaman werewolf", "aura seer", "serial killer", "priest", "wolf seer", "seer"]
break;
default:
message.channel.send("Not enough people")
}
let roles = shuffle(rolelist);
let i;
for (i = 0; i < roles.length; i++) {
//For example, "role_1" would be "seer".
db.set(`role_${i + 1}`, roles[i]);
}
let priv_1 = message.guild.channels.cache.get("729900330099146990");
priv_1.send(`Your role is **${roles[0]}**.`);
let priv_2 = message.guild.channels.cache.get("729900330099146991");
priv_2.send(`Your role is **${roles[1]}**.`);
let priv_3 = message.guild.channels.cache.get("729900330300473434");
priv_3.send(`Your role is **${roles[2]}**.`);

let priv_4 = message.guild.channels.cache.get("729900330300473435");
priv_4.send(`Your role is **${roles[3]}**.`);
if (roles.length === 4) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_5 = message.guild.channels.cache.get("729900330300473436");
priv_5.send(`Your role is **${roles[4]}**.`);
if (roles.length === 5) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_6 = message.guild.channels.cache.get("729900330300473437");
priv_6.send(`Your role is **${roles[5]}**.`);
if (roles.length === 6) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_7 = message.guild.channels.cache.get("729900330300473438");
priv_7.send(`Your role is **${roles[6]}**.`);
if (roles.length === 7) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_8 = message.guild.channels.cache.get("729900330300473439");
priv_8.send(`Your role is **${roles[7]}**.`);
if (roles.length === 8) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_9 = message.guild.channels.cache.get("729900330300473440");
priv_9.send(`Your role is **${roles[8]}**.`);
if (roles.length === 9) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_10 = message.guild.channels.cache.get("729900330300473441");
priv_10.send(`Your role is **${roles[9]}**.`);
if (roles.length === 10) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_11 = message.guild.channels.cache.get("729900330300473442");
priv_11.send(`Your role is **${roles[10]}**.`);
if (roles.length === 11) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}

let priv_12 = message.guild.channels.cache.get("729900330300473443");
priv_12.send(`Your role is **${roles[11]}**.`);
if (roles.length === 12) {
return message.channel.send(
`<@${message.author.id}>, roles have been given out.`
);
}


}
};
