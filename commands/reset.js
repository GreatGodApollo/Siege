const settings = require('../settings.json');
exports.run = (client, message, params) => {
    client.user.setGame().catch(console.error);
    message.reply('Successfully resetted!')
    client.user.setStatus(online).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['w'],
  permLevel: 4
};

exports.help = {
  name: 'reset',
  description: 'Reset\'s the bot\'s game and status.',
  usage: 'reset'
};