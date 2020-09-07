const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shop",
  description: "checkout the shop",
  category: "shop",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Werewolf Adventure Shop')
    .setDescription('Buy an item with the `=buy <ID>` command.')
    .addFields(
        { name: '200 <:gold:737268058996998215> - Special role (ID= specialrole)', value: 'You can get your very own special role! Once you purchase this item, ping a Manager+ to create the role for you!'},
        { name: '1,000 <:gold:737268058996998215> - Custom Rolelist Pass (ID= CRP)', value: 'Are you not enjoying the default rolelist of classic or sandbox everytime you play? Do you want to submit your own rolelist for a game? Well i have good news for you! With this pass you are able to make any rolelist you want! Note: This pass can only be used when the gamemode "random" is selected.'},
        { name: '1,500 <:gold:737268058996998215> - Private Voice Channel (ID= vchannel)', value: "Isn't it annoying when random people join your voice channel or change the music you are listening? Well this item is made for you! With this item you can manage whoever is able to join your voice chat, listen to any song you like or just create an amazing party with your friends! Isn't it amazing?"},
        { name: '2,000 <:gold:737268058996998215> - Private Channel (ID= channel', value: "Did you always dreamed of a channel you own? I have good news for you, Your dream came true! with this channel you can do whatever you want. create your own diary, game, story or anything you want. How epic! ping a Moderator+ to create your channel."}
    )
    message.channel.send(embed);
  }
}  


module.exports.config = {
    name: "shop",
    description: "check out what is in the shop",
    usage: "=shop",
    aliases: []
}
