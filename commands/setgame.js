exports.run = (client, message, params) => {
    let presult = params.join(' ');
    if (!presult) {
        message.channel.send('Please say the game you want me to display. Ex: ``/setgame /help | NewGen``').catch(console.error);
        return;
    } else
        
    if (presult === 'end') {
        client.user.setGame().catch(console.error);
        message.channel.send(`Game has been reset!`).catch(console.error);
        return;
    } else
    client.user.setGame(presult)
    message.channel.send(`Game has been set to ${presult}!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setgame',
  description: `Sets the game for the bot. Level: ${exports.conf.permLevel}`,
  usage: 'setgame [game]'
};