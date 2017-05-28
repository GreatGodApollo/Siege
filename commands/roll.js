const settings = require('../settings.json');
exports.run = (client, message, params) => {
  let presult = params.join(' ');
  var roll = Math.floor(Math.random() * presult) + 1;
    message.channel.send('', {embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Roll',
    url: 'http://thehangout.tk',
    description: `you rolled a ${roll}!`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Roll Command'
    }
  }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: `Rolls a dice. Level: ${exports.conf.permLevel}`,
  usage: 'roll [sides]'
};