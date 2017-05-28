const settings = require('../settings.json');
exports.run = (client, message, params) => {
    let user = message.mentions.users.first();

    if (params.length < 1) user = message.author;

    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Avatar',
    url: 'http://thehangout.tk',
    fields: [{
        name: `${user.username}'s Avatar`,
        value: `${user.avatarURL}`
      }
    ],
    image: {
        url: user.avatarURL
    },
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Avatar Command'
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
  name: 'avatar',
  description: `Gives avatar for mentioned user. Level: ${exports.conf.permLevel}`,
  usage: 'avatar <user>'
};