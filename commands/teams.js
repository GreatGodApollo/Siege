exports.run = (client, message, params) => {
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Teams',
    url: 'http://thehangout.tk',
    fields: [{
        name: 'Force',
        value: 'Force Description Here'
      },
      {
        name: 'Derp',
        value: 'Derp Description Here'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Teams Command'
    }
  }
});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'teams',
  description: 'Lists all the current valid teams. Level: Everyone',
  usage: 'teams'
};