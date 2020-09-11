const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
const i = require('./role.js')
const roles = require('./role.js')

module.exports = {
  name: "rolelist",
  description: "check the rolelist",
  category: "game",
  run: async ( bot, message, args) => {
    const role1 = db.fetch(`role_1`, roles[0]) 
    const role2 = db.fetch(`role_2`, roles[1])
    const role3 = db.fetch(`role_3`, roles[2])
    const role4 = db.fetch(`role_4`, roles[3])
    const role5 = db.fetch(`role_5`, roles[4])
    const role6 = db.fetch(`role_6`, roles[5])
    const role7 = db.fetch(`role_7`, roles[6])
    const role8 = db.fetch(`role_8`, roles[7])
    const role9 = db.fetch(`role_9`, roles[8])
    const role10 = db.fetch(`role_10`, roles[9])
    const role11 = db.fetch(`role_11`, roles[10])
    const role12 = db.fetch(`role_12`, roles[11])
    if (message.channel.name != "narrator-commands") return;
      let embed = new MessageEmbed()
      .setTitle('Rolelist')
      .setDescription(` 1. ${role1} \n 2. ${role2} \n 3. ${role3} \n 4. ${role4} \n 5. ${role5} \n 6. ${role6} \n 7. ${role7} \n 8. ${role8} \n 9. ${role9} \n 10. ${role10} \n 11. ${role11} \n 12. ${role12}`)
      message.channel.send(embed)
    
  }
}
