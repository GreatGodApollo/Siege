const settings = require('../settings.json');
exports.run = (client, message, params) => {
    client.channels.get('311670113344684034').send('', {embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Announcement',
    url: 'http://thehangout.tk',
    description: `${params}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Announcement Command'
    }
  }
    })
    .then
    client.channels.get('311670113344684034').send(`${message.author}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'announce',
  description: 'Used for doing announcements.',
  usage: 'announce <announcement>'
};