exports.run = (client, message, args) => {
  let amount = message.guild.memberCount


message.channel.send({ embed: {
    title: `MemberCount Command`,
    url: 'http://thehangout.tk',
    description: `${message.guild.name} has ${amount} Members!`,
    color: 15158332,
    fields: [{
        name: 'Online Members',
        value: `${message.guild.members.filter(m=>m.user.presence.status === 'online').size}/${amount}`,
        inline: true
      },
      {
        name: 'Idle Members',
        value: `${message.guild.members.filter(m=>m.user.presence.status === 'idle').size}/${amount}`,
        inline: true
      },
      {
        name: 'DnD Members',
        value: `${message.guild.members.filter(m=>m.user.presence.status === 'dnd').size}/${amount}`,
        inline: true
      },
      {
        name: 'Offline Members',
        value: `${amount - message.guild.members.filter(m=>m.user.presence.status === 'online').size - message.guild.members.filter(m=>m.user.presence.status === 'idle').size - message.guild.members.filter(m=>m.user.presence.status === 'dnd').size}/${amount}`,
        inline: true
      }
    ],
    thumbnail: { url: message.guild.iconURL },
  timestamp: new Date(),
  footer: {
      icon_url: client.user.avatarURL,
      text: 'MemberCount Command'
    }
  }
})

  };


  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['mc'],
    permLevel: 0
  };

  exports.help = {
    name: 'membercount',
    description: `Finds the amound of members in the server. Level: ${exports.conf.permLevel}`,
    usage: 'membercount'
  };

