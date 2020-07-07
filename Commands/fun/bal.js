const discord = require('discord.js')
const db = require('quick.db')

module.exports={
name: "bal",
aliases: [balance, money],
description: "you can check your balance with this command",
category: "fun",
run: async(bot,message,args)=>{
console.log('It works!')
}
}

