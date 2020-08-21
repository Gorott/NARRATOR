const {MessageEmbed}= require('discord.js')
module.exports={
    name: "8ball",
    description: "Tells your answer!",
    category: "fun",
    usage: "<question>",
    run: async(bot,message,args)=>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question){
            return message.reply("You did not specify your question!")
        } else{
            let responses = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes – definitely",
                "You may rely on it",
                "As I see it",
                "yes",
                "Most Likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "NO U",
                "Ask your friend",
                "Google can help you",
                "Unfortunately, NO!",
                "Why?",
                "Nah..."
            ]
            let Response = responses[Math.floor(Math.random()*(responses.length))]
            let Embed = new MessageEmbed()
            .setTitle('Let me make your decision!')
            .setColor('RANDOM')
            .setDescription('Your question: '+question+"\nMy reply: " +Response)
            message.channel.send(Embed)
        }
    }
}
