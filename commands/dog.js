const got = require('got');

exports.getDog = function (callback) {
    got('http://random.dog/woof').then(res => callback(undefined, `http://random.dog/${res.body}`)).catch(callback);
};

exports.run = function (bot, msg) {

    this.getDog((err, res) => {
        if (err) {
            return msg.error(err);
        }

        msg.channel.send({ files: [res] }).then(() => msg.delete()).catch(err2 => {
            bot.logger.severe(err2);
            msg.error('Failed to send the file!');
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'Display a dog. Level: Everyone',
  usage: 'dog'
};
