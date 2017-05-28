const settings = require('../settings.json');
exports.run = (client, message, params) => {
    let guild = message.guild
    let mentioned = guild.member(message.mentions.users.first());
    let content = message.content.slice(settings.prefix.length + 'flip'.length);
    if (!mentioned) return message.channel.send('Please mention a user you want to flip at.');
    if (mentioned.user === client.user) {
    message.channel.send(`:middle_finger: ${message.author}`);
    return;
    } else
    message.delete(0);
    message.channel.send(':middle_finger:' + content);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'flip',
  description: `Flips the mentioned user off. Level: ${exports.conf.permLevel}`,
  usage: 'flip <username>'
};
