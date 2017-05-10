exports.run = (client, message) => {
  message.channel.send('Ping?')
    .then(message => {
      message.edit(`Pong! (took: ${message.createdTimestamp - message.createdTimestamp}ms)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Emmits a pong command which displays your Latency.',
  usage: 'ping'
};