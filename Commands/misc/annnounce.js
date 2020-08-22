const {MessageEmbed, GuildMember} = require('discord.js')
module.exports={
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id | name> <msg>",
    run: async(bot,message,args)=>{
        let msg;
        let textchannel = message.mentions.channels.first() 
        if(message.member.hasPermission(['MANAGE_MESSAGES']))
        if(!args[0]) return message.channel.send(`You didn't gave me an announcement to send.`)
        if(!textchannel) return message.channel.send(`You didn't mention a channel.`)

        message.delete()

        if(textchannel) {
            msg = args.slice(1).join(" ");
            textchannel.send(msg)
        }
    }
}