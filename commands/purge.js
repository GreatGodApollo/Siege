exports.run = function(client, message, args) {
    let messagecount = parseInt(args.join(' '));
    let result = args.join(' ');
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    if (!result) {
        message.channel.send('100 messages were successfully deleted.').catch(console.error);
    } else
    message.channel.send(`${result} messages were successfully deleted.`).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Deletes a given amount of messages from the given channel. Level: Mod',
  usage: 'purge <number>'
};