const MessageEmbed = require('discord.js');
module.exports = {
  name: "shop",
  description: "checkout the shop",
  category: "shop",
  run: async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle('Werewolf Adventure Shop')
    .setDescription('Buy an item with the `=buy` command.')
    .addFields(
        { name: '200 <:gold:737268058996998215> - Special role', value: 'You can get your very own special role! Once you purchase this item, ping a Manager+ to create the role for you!'},
        { name: '1,000 <:gold:737268058996998215> - Custom Rolelist Pass', value: 'Are you not enjoying the default rolelist of classic or sandbox everytime you play? Do you want to submit your own rolelist for a game? Well i have good news for you! With this pass you are able to make any rolelist you want! Note: This pass can only be used when the gamemode "random" is selected.'},
        { name: '1,500 <:gold:737268058996998215> - Private Channel', value: "Isn't it annoying when random people join your voice channel or change the music you are listening? Well this item is made for you! With this item you can manage whoever is able to join your voice chat, listen to any song you like or just create an amazing party with your friends! Isn't it amazing?"}
    )
    message.channel.send(embed);
  }
}  