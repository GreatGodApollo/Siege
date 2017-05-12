exports.run = function(client, message, args) {
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Test',
    url: 'http://thehangout.tk',
    description: `test\n*test*\n**test**\n***test***\n\nTest Completed.`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Test Command'
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
  name: 'test',
  description: 'A cool test command to see if the bot is functioning. Level: None',
  usage: 'test'
};