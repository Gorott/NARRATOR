const {MessageEmbed, GuildMember} = require('discord.js')
module.exports={
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id | name> <msg>",
    run: async(bot,message,args)=>{
        let textchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!textchannel) textchannel = message.guild.channels.cache.find(x => x.name === args[0])
        let msg = args.slice(1).join(" ");
        if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return
        if(!args[0]) return message.channel.send(`You didn't gave me an announcement to send.`)
        if(!textchannel) return message.channel.send(`You didn't mention a channel.`)

        message.delete()
        textchannel.send(msg)
    }
}
