const mongo = require('../mongo')
const profileSchema = require('./profile')

module.exports = (bot) => {}

module.exports.getCoins = async (guildID, userID) => {
  return await mongo().then(async (mongoose) => {
    try {
      console.log('Running findOne()')
      
      const result = await profileSchema.findOne({
        guildID,
        userID,
      })
      
      console.log('RESULT:', result)
      
      let coins = 0
      if (result) {
        coins = result.coins
      } else {
        console.log('Inserting a Document...')
        await new profileSchema({
          guildID,
          userID,
          coins,
        }).save()
      }
      
      return coins
    } finally {
      mongoose.connection.close()
    }
  })
}