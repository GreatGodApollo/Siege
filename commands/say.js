exports.run = (client, message, params) => {
    let presult = params.join(' ');
    message.delete(0)
    message.channel.send(presult).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: `Makes the bot say what you say. Level: ${exports.conf.permLevel}`,
  usage: 'say [what he should say]'
};
