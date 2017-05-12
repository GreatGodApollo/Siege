exports.run = (client, message, params) => {
  let guild = message.guild
    let mentioned = guild.member(message.mentions.users.first())
    mentioned.removeRole('302888122340081665').catch(console.error).then(member => {
        message.channel.send(`Successfully unmuted ${member.user.username}.`)
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  description: 'Retracts the Muted role from the mentioned user. Level: Mod',
  usage: 'unmute <user>'
};
