const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send('', {embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Command List',
    url: 'http://thehangout.tk',
    description: `Use ${settings.prefix}help <commandname> for details`,
    fields: [{
        name: 'Commands',
        value: `${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Help Command'
    }
  }
    });
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send('', {embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: `${command.help.name}`,
    url: 'http://thehangout.tk',
    description: ``,
    fields: [{
        name: 'Description',
        value: `${command.help.description}`
      },
      {
        name: 'Usage',
        value: `${command.help.usage}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: `${command.help.name} Help Command`
    }
  }
    });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};
