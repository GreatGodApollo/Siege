
const Discord = require("discord.js")
exports.run = (bot, msg, args) => {


    msg.channel.send(`Here is an invite ==> https://discord.gg/zZypw3s`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Creates a invite command',
  usage: 'invite'
};
