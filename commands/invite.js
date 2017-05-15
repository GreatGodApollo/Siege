
const Discord = require("discord.js")
exports.run = (bot, msg, args) => {
  let guild = msg.guild
  let invite = guild.invite
  let invites = guild.fetchInvite(invite.guild)

    msg.channel.send(`Here is an invite ==> ${invites}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Sends an invite to the testing server. Level: Everyone',
  usage: 'invite'
};
