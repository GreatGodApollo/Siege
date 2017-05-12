exports.run = (client, message, args) => {
message.channel.send({
  embed: {
    title: `This server has ${message.guild.memberCount} Members`,
    description: `Online Members ${message.guild.members.filter(m=>m.user.presence.status === "online").size}`,
    thumbnail: { url: message.guild.iconURL },
    color: 14814143
  }
})

  };


  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'mc',
    description: 'Finds the amound of members in the server.',
    usage: 'mc'
  };
