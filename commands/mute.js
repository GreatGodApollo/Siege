exports.run = (client, message, params) => {
  let guild = message.guild
    let mentioned = guild.member(message.mentions.users.first());
    mentioned.addRole('302888122340081665').catch(console.error).then(member => {
        message.channel.send(`Successfully muted ${member.user.username}.`)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Assigns the Muted role to the mentioned user.', 
  usage: 'mute <user>'
};