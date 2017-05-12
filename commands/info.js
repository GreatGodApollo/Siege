const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message) => {


  const embed = new Discord.RichEmbed()
    .setAuthor('Siege Info')



    .setColor(14814143)
    .setFooter('Bot Info')
    .setThumbnail(client.avatarURL)


      .addField(' ❯ Memory Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, false)

    .addField(' ❯ Uptime',` ${client.uptime} MS`, true)

        .addField(`❯ Version`, `v${Discord.version}`, false)
.addField(`❯ Creators`, `[@єรςคթє#4896](thehangout.tk)\n@ʍɛɨֆȶɛʀ#7070\n[@Apollo (beezTEM)#9746](https://www.youtube.com/channel/UC2aexUupMf_UzoEArAXnGDA)\n[@Olykir#2588](https://www.reddit.com/u/Olykir)`, true)


  message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: `Displays the bot info. Level: Everyone`,
  usage: 'info'
};
