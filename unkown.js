// THIS IS JUST USED TO PUT COMMANDS IN, I'M SLOWLY GOING THROUGH ALL OF THEM

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.id !== '310557390346911744') return message.channel.send(`Sorry, commands are not accepted in **${message.channel.name}**.`);
    let command = message.content.split(" ")[0];
    command = command.slice(settings.prefix.length);
    command = command.toLowerCase();
    var guild = message.guild
    let args = message.content.split(' ').slice(1);
    let result = args.slice(1).join(' ');
    let argresult = args.join(' ');
    console.log('I saw that');

    if (command === 'reset') {
        client.user.setGame().catch(console.error);
        message.reply('Successfully resetted!')
        client.user.setStatus(online).catch(console.error);
    } else

    if (command === 'setstatus') {
        if (!argresult) {
        message.channel.send('Please say a status. The 4 statuses are ``online | idle | invisible | dnd``').catch(console.error);
        return;
        } else
        client.user.setStatus(argresult).catch(console.error);
        if (argresult === 'dnd') {
        message.channel.send(`Status has been set to do not disturb!`).catch(console.error);
        } else
        message.channel.send(`Status has been set to ${argresult}!`).catch(console.error);
    } else

    if (command === 'roll') {
    var roll = Math.floor(Math.random() * argresult) + 1;
    message.reply(`you rolled a ${roll}!`).catch(console.error); 
  } else

  if (command === "say") {
    message.delete(0)
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  } else

  if (command === 'time') {
    if (args.length === 0) {
        message.channel.send("Please mention a legal timezone you want to identify. The options are ``eastern | central | mountain | pacific``\nAn example usage would be ``<time eastern``").catch(console.error);
    } else if (!["eastern", "central", "mountain", "pacific"].includes(args[0])) {
        message.channel.send("Please mention a legal timezone you want to identify. The options are ``eastern | central | mountain | pacific``\nAn example usage would be ``<time eastern``").catch(console.error);
    } else if (args[0] === "eastern") {
        message.channel.sendMessage(`The current time for Eastern Standard Time is:\n**${moment.tz('America/New_York').format('h:mm A')}**`).catch(console.error);
    } else if (args[0] === "central") {   
        message.channel.sendMessage(`The current time for Central Standard Time is:\n**${moment.tz('America/Cancun').format('h:mm A')}**`).catch(console.error);
    } else if (args[0] === "mountain") {   
        message.channel.sendMessage(`The current time for Mountain Standard Time is:\n**${moment.tz('America/Chihuahua').format('h:mm A')}**`).catch(console.error);
    } else if (args[0] === "pacific") {   
        message.channel.sendMessage(`The current time for Pacific Standard Time is:\n**${moment.tz('America/Los_Angeles').format('h:mm A')}**`).catch(console.error);
    }
  } else

  if (command === 'mc') {
    let members = guild.memberCount
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'MemberCount',
    url: 'http://thehangout.tk',
    description: `We currently have ${members} members!`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'MemberCount Command'
    }
  }
    });
  } else if (command === 'membercount') {
    let members = guild.memberCount
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'MemberCount',
    url: 'http://thehangout.tk',
    description: `We currently have ${members} members!`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'MemberCount Command'
    }
  }
    });
  } else

  if (command === 'test') {
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Test',
    url: 'http://thehangout.tk',
    description: `test\n*test*\n**test**\n***test***\n\nTest Completed.`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'Test Command'
    }
  }
    });
  } else

  if (command === 'embed') {
    if(!["default", "aqua", "green", "blue", "purple", "gold", "orange", "red", "grey", "darker_grey", "navy", "dark_aqua", "dark_green", "dark_blue", "dark_purple", "dark_gold", "dark_orange", "dark_red", "dark_grey", "light_grey", "dark_navy"].includes(args[0])) {
        // Give example
    } else {
        let a = args[0];
		let color = 0;
		// UNECESSARY: args.shift();
        if (a === "default") color = 0;
        if (a === "aqua") color = 1752220;
        if (a === "green") color = 3066993;
        if (a === "blue") color = 3447003;
        if (a === "purple") color = 10181046;
        if (a === "gold") color = 15844367;
        if (a === "orange") color = 15105570;
        if (a === "red") color = 15158332;
        if (a === "grey") color = 9807270;
        if (a === "darker_grey") color = 8359053;
        if (a === "navy") color = 3426654;
        if (a === "dark_aqua") color = 1146986;
        if (a === "dark_green") color = 2067276;
        if (a === "dark_blue") color = 2123412;
        if (a === "dark_purple") color = 7419530;
        if (a === "dark_gold") color = 12745742;
        if (a === "dark_orange") color = 11027200;
        if (a === "dark_red") color = 10038562;
        if (a === "dark_grey") color = 9936031;
        if (a === "dark_navy") color = 2899536;
        if (a === "light_grey") color = 12370112;

        message.channel.send("", {embed: {
            color: color,
            description: `${result}`
        }});
    }
  } else

  if (command === '8ball') {
    message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: '8Ball',
    url: 'http://thehangout.tk',
    description: `${eightball}`,
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '8Ball Command'
    }
  }
    });
} else

  if (command === 'sinfo') {
      message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    thumbnail: {
        url: message.guild.iconURL
    },
    title: 'Server Info',
    url: 'http://thehangout.tk',
    description: `ID: ${message.guild.id}`,
    fields: [{
        name: 'Member Count',
        value: `${message.guild.memberCount} Users | ${message.guild.members.filter(member => member.user.presence.status === 'online', 'idle', 'dnd').size} Online`,
        inline: true
      },
      {
        name: 'Default Channel',
        value: `${message.guild.defaultChannel}`,
        inline: true
      },
      {
        name: 'Owner',
        value: `${message.guild.owner.user.tag}`,
        inline: true
      },
      {
        name: 'Channels',
        value: `${message.guild.channels.filter(ch => ch.type === 'text').size} Text | ${message.guild.channels.filter(ch => ch.type === 'voice').size} Voice`,
        inline: true
      },
      {
        name: 'Roles',
        value: `${message.guild.roles.size} Roles`,
        inline: true
      },
      {
        name: 'Region',
        value: `${message.guild.region}`,
        inline: true
      },
      {
        name: 'Created On',
        value: `Guild was created at ${message.guild.createdAt}`,
        inline: true
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: 'ServerInfo Command'
    }
  }
    });
  } else

  if (command === 'server') {
          message.channel.send('', {embed: {
    color: 15158332,
    author: {
      name: 'h a n g o u t',
      icon_url: client.guilds.get('294643442066128897').iconURL
    },
    thumbnail: {
        url: 'http://i.imgur.com/4jyWk0a.png'
    },
    title: 'Welcome to the h a n g o u t discord server!',
    url: 'http://thehangout.tk',
    description: '',
    fields: [{
        name: 'Why join h a n g o u t?',
        value: 'You should join h a n g o u t because not only do we have an awesome staff that can help you with any question you have about the server, but we have a friendly community as well with some **pretty fine** memes. We have a huge selection of channels, including **#memes**, **#info**, **#nsfw**, **#picture_verified** and more! The biggest thing though, is the events!'
      },
      {
        name: 'Events',
        value: 'There\'s plenty of events that go on in h a n g o u t! Hosted every few days can include **scary** and **spooky** movie nights, where we watch a horror film. Or we could be having a huge competition to see who becomes the next **h a n g o u t Champion** in Game Night!'
      },
      {
        name: 'Join our Community today!',
        value: '[**Server**](https://discord.gg/pppNK2G) | [**Website**](http://thehangout.tk) | [**Nexus**](https://discord.gg/gu6XGfp)',
      }
    ],
    footer: {
      icon_url: client.guilds.get('294643442066128897').iconURL,
      text: 'Join h a n g o u t today!'
    }
  }
  });
} else

  if (command === 'shutdown') {
      message.channel.send('Shutting down...')
      client.destroy()
  } else return;
});