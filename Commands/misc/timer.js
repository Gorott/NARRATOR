const ms = require('ms')
const {MessageEmbed}= require('discord.js')
const {Timers}=require('../../variable')
module.exports={
    name: "timer",
    description: "Set a timer for your self!",
    usage: "<#d/h/m/s>",
    category: "misc",
    run:async(bot,message,args)=>{
        if (message.member.hasPermission(["MANAGE_CHANNELS"]))
        if(!args[0]){
            return message.channel.send(`You did not specify the amount of time you wish to set the timer on!`)
        }
        if(!args[0].includes("d")&&args[0].includes("h")&&args[0].includes("m")&&args[0].includes("s")){
            return message.channel.send(`Thats not the correct format for the timer!`)
        }
        message.channel.send(`Timer set for ${args[0]}`)
        setTimeout(() => {
            message.channel.send(`Timer Finished!`)
            Timers.delete(message.author.id+" G "+message.guild.name)
        }, ms(args[0]));
    }
}