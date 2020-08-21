const {MessageEmbed} = require ('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API ping',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('🏓 Pinging...')
        const Embed = new MessageEmbed()
        .setTitle('🏓Pong!🏓')
        .setDescription(` Lateny is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}MS\n API Latency is ${Math.round(bot.ws.ping)}MS`)
        .setColor('RANDOM')
        msg.edit(Embed)
    }
}

module.exports.config = {
    name: "ping",
    description: "check the latency of the bot",
    usage: "=ping",
    aliases: []
}
