const {MessageEmbed, GuildMember} = require('discord.js')
module.exports={
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id | name> <msg>",
    run: async(bot,message,args)=>{
        let rChannel = message.guild.channels.cache.get(args[0])
        if (message.member.hasPermission(["EMBED_LINKS"]))
        if(!rChannel)return message.channel.send(`You did not specify your channel to send the announcement to.`)
        let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
        if(!MSG)return message.channel.send(`You did not specify your message to send!`)
        const _ = new MessageEmbed()
        .setTitle(`New announcement!`)
        .setDescription(`${MSG}`)
        .setColor('RANDOM')
        rChannel.send(_)
        message.delete()
        
    }
}