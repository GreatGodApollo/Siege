exports.run = function(bot, msg, args) {
  msg.channel.send({embed: {description:`<@${msg.author.id}>,  You flipped **${Math.random() > 0.5 ? "Heads" : "Tails"}**.`}}); // Chooses either Heads or Tails
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Flip a coin.',
  usage: 'coinflip'
};
