const figlet = require('figlet');

exports.run = (bot, message, args) => {
    if (args.length < 1) {
         message.channel.send("Please put some text after the command"); return // This makes sure there is text in the command
    }



    figlet.text(args.join(' '), (err, res) => {
        if (err)
            return message.error(err);
        message.channel.send({embed: {description: `\`\`\`${res}\`\`\``, color: 14814143}});
    }); // This is what makes the art NOTE: You need figlet

};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['figlet'],
  permLevel: 0
};

exports.help = {
  name: 'art',
  description: 'Displays Ascii text art.',
  usage: 'art [text]'
};
