//Credit for most of this code goes to LuciferianThomas#0666

const db = require(`quick.db`);
const Discord = require(`discord.js`);

module.exports = {
  name: "leaderboard",
  description: "Check the sever's leaderboard",
  aliases: ["lb"],
  run: async (bot, message, args) => {
    //future expansion into other currencies or lb values
    //if (args[0] && !["xp","roses","coins"].includes(args[0].toLowerCase()))
    //  return await message.channel.send("Invalid input. Accepted values: `xp`, `roses`, `coins`.")
    
    //if (!args.length) args[0] = 'xp'
    
    args = ["coins"]
    
    let allPlayers = db.all().map((x) => {
      if (typeof x.data == "string") x.data = JSON.parse(x.data);
      let data = {};
      data.coins = x.data;
      data.id = x.ID.replace("coins_", "").replace(`_${message.guild.id}`, "");
      data.nickname = bot.users.cache.get(x.ID)
        ? `${bot.users.cache.get(data.id).username}`
        : `Unknown User: ${data.id}`;
      return data;
    });

    let sortedPlayers = allPlayers.sort((a, b) => {
      if (a[args[0].toLowerCase()] < b[args[0].toLowerCase()]) return 1;
      else if (a[args[0].toLowerCase()] > b[args[0].toLowerCase()]) return -1;
      if (a.coins < b.coins) return 1;
      else if (a.coins > b.coins) return -1;
      if (a.nickname.startsWith("Unknown User")) return 1;
      if (a.nickname.toLowerCase() > b.nickname.toLowerCase()) return 1;
      else if (a.nickname.toLowerCase() < b.nickname.toLowerCase()) return -1;
    });
    
    let embeds = []

    for (var [i, player] of sortedPlayers.entries()) {
      if (i % 10 == 0) embeds.push(new Discord.MessageEmbed().setDescription(""))
      // if(player[args[0].toLowerCase()] == 0 || player[args[0].toLowerCase()] == undefined) continue;
      embeds[embeds.length - 1].description += `${
        i == 0
          ? ":first_place: "
          : i == 1
          ? ":second_place: "
          : i == 2
          ? ":third_place: "
          : `\`${i+1}\` `
    }${player.nickname}${player.id == message.author.id ? " (**you**)" : ""}${args[1] && args[1].toLowerCase() == "debug" ? ` (\`${player.id}\`)` : ""} [\`${player[args[0].toLowerCase()] || 0}\`]\n`
    }
    
    for (var [i, embed] of embeds.entries()) {
      embed
        .setTitle(
          `${
            args[0].toLowerCase() == "xp"
              ? "XP"
              : `${args[0].toUpperCase()}${args[0].slice(1).toLowerCase()}`
          } Leaderboard (#${i * 10 + 1}-#${Math.min(
            (i + 1) * 10,
            sortedPlayers.length
          )})`
        )
        .setFooter(
          `Page ${i + 1}/${embeds.length} | Sorted in descending order by ${
            args[0].toLowerCase() == "xp"
              ? "XP"
              : args[0].toLowerCase()
          }.`
        )
    }
  },
};

let paginator = async (author, msg, embeds, pageNow, addReactions = true) => {
  if (embeds.length === 1) return;
  if (addReactions) {
    await msg.react("⏪");
    await msg.react("◀");
    await msg.react("▶");
    await msg.react("⏩");
  }
  let reaction = await msg
    .awaitReactions(
      (reaction, user) =>
        user.id == author &&
        ["◀", "▶", "⏪", "⏩"].includes(reaction.emoji.name),
      { time: 30 * 1000, max: 1, errors: ["time"] }
    )
    .catch(() => {});
  if (!reaction) return msg.reactions.removeAll().catch(() => {});
  reaction = reaction.first();
  //console.log(msg.member.users.tag)
  if (
    msg.channel.type == "dm" ||
    !msg.guild.me.hasPermission("MANAGE_MESSAGES")
  ) {
    if (reaction.emoji.name == "◀") {
      let m = await msg.channel.send(embeds[Math.max(pageNow - 1, 0)]);
      msg.delete();
      paginator(author, m, embeds, Math.max(pageNow - 1, 0));
    } else if (reaction.emoji.name == "▶") {
      let m = await msg.channel.send(
        embeds[Math.min(pageNow + 1, embeds.length - 1)]
      );
      msg.delete();
      paginator(author, m, embeds, Math.min(pageNow + 1, embeds.length - 1));
    } else if (reaction.emoji.name == "⏪") {
      let m = await msg.channel.send(embeds[0]);
      msg.delete();
      paginator(author, m, embeds, 0);
    } else if (reaction.emoji.name == "⏩") {
      let m = await msg.channel.send(embeds[embeds.length - 1]);
      msg.delete();
      paginator(author, m, embeds, embeds.length - 1);
    }
  } else {
    if (reaction.emoji.name == "◀") {
      await reaction.users.remove(author);
      let m = await msg.edit(embeds[Math.max(pageNow - 1, 0)]);
      paginator(author, m, embeds, Math.max(pageNow - 1, 0), false);
    } else if (reaction.emoji.name == "▶") {
      await reaction.users.remove(author);
      let m = await msg.edit(embeds[Math.min(pageNow + 1, embeds.length - 1)]);
      paginator(
        author,
        m,
        embeds,
        Math.min(pageNow + 1, embeds.length - 1),
        false
      );
    } else if (reaction.emoji.name == "⏪") {
      await reaction.users.remove(author);
      let m = await msg.edit(embeds[0]);
      paginator(author, m, embeds, 0, false);
    } else if (reaction.emoji.name == "⏩") {
      await reaction.users.remove(author);
      let m = await msg.edit(embeds[embeds.length - 1]);
      paginator(author, m, embeds, embeds.length - 1, false);
    }
  }
};
