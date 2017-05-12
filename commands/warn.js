const settings = require('../settings.json');
exports.run = (client, message, params) => {
    console.logs(args);
    if (message.mentions.users < 1) return message.reply('You must mention someone to warn them.').catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user. Level: Mod',
  usage: 'warn [mention]'
};