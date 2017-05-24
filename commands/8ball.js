exports.run = (client, message, params) => {
  let words = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
  let ball = words[Math.floor(Math.random()* words.length)]
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: '8Ball',
    url: 'http://thehangout.tk',
    description: `${ball}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '8Ball Command'
    }
  }
});
}; 

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: `Shakes the eight ball and gives answer.`,
  usage: '8ball <question>'
};