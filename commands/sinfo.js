exports.run = (client, message, params) => {
      message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    thumbnail: {
        url: message.guild.iconURL
    },
    title: 'Server Info',
    url: 'http://thehangout.tk',
    description: `ID: ${message.guild.id}`,
    fields: [{
        name: 'Member Count',
        value: `${message.guild.memberCount} Users | ${message.guild.members.filter(member => member.user.presence.status === 'online', 'idle', 'dnd').size} Online`,
        inline: true
      },
      {
        name: 'Default Channel',
        value: `${message.guild.defaultChannel}`,
        inline: true
      },
      {
        name: 'Owner',
        value: `${message.guild.owner.user.tag}`,
        inline: true
      },
      {
        name: 'Channels',
        value: `${message.guild.channels.filter(ch => ch.type === 'text').size} Text | ${message.guild.channels.filter(ch => ch.type === 'voice').size} Voice`,
        inline: true
      },
      {
        name: 'Roles',
        value: `${message.guild.roles.size} Roles`,
        inline: true
      },
      {
        name: 'Region',
        value: `${message.guild.region}`,
        inline: true
      },
      {
        name: 'Created On',
        value: `Guild was created at ${message.guild.createdAt}`,
        inline: true
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'ServerInfo Command'
    }
  }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sinfo'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: `Gives info about the server. Level: ${exports.conf.permLevel}`,
  usage: 'serverinfo'
};