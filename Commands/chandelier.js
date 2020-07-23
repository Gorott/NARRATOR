const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');
module.exports={
  name: "chandelier",
  run async(bot,message,args)=>{
fetch('http://growapi.cf/item/chandelier').then(response => response.json());
const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

	message.channel.send(file);
  }
}