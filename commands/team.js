exports.run = (client, message, params) => {
  if (params.length === 0) {
      message.channel.send('Please specify the team you want to join.').catch(console.error);
  } else if (!['Force', 'Derp'].includes(params[0])) {
      message.channel.send('That team does not exist! Please join a valid team, which is listed with ``s/teams``').catch(console.error);
  }
  if (params[0] === 'Force') {
    message.author.addRole('318253976279711752')
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    thumbnail: {
    url: 'http://i.imgur.com/TqEidwC.png'
    },
    title: 'Team',
    url: 'http://thehangout.tk',
    description: `Thanks for joining the Force Team! May the force be with you!`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Team Command'
    }
  }
});
} else if (params[0] === 'Derp') {
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    thumbnail: {
    url: 'http://i.imgur.com/GWUFvSs.png'
    },
    title: 'Team',
    url: 'http://thehangout.tk',
    description: `Thanks for joining team Derp! Lol Derp.`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Team Command'
    }
  }
});
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'team',
  description: `Allows you to join a team. Level: ${exports.conf.permLevel}`,
  usage: 'team <teamname>'
};