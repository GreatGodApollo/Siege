

exports.run = (client, msg, [num]) => {
msg.channel.send({ files: ["./images/cat2.png"] }) // sends a picture of a cat
  }



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: `Find your cat. Level: ${exports.conf.permLevel}`,
  usage: 'cat'
};
