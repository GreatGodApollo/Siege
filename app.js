const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const ddiff = require('return-deep-diff');
const moment = require('moment'); 
require('moment-timezone'); 

client.on('ready',() => {
   console.log("I'm Online\nkys");
})

var prefix = settings.prefix

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(settings.prefix.length);
    command = command.toLowerCase();
    let args = message.content.split(" ").slice(1);
    var result = args.join(' ');
    console.log('I saw that');
    if (message.author.bot) return;

    if (command === 'purge') {
        let messagecount = parseInt(result);
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        if (!result) {
            message.channel.send('100 messages were successfully deleted.');
        } else
        message.channel.send(`${result} messages were successfully deleted.`);
    } else

    if (command === 'reset') {
        client.user.setGame().catch(console.error);
        message.reply('Successfully resetted!')
        client.user.setStatus(online).catch(console.error);
    } else

    if (command === 'setstatus') {
        if (!result) {
        message.channel.send('Please say a status. The 4 statuses are ``online | idle | invisible | dnd``').catch(console.error);
        }
        if (!result) return;
        client.user.setStatus(result).catch(console.error);
        if (result === 'dnd') {
        message.channel.send(`Status has been set to do not disturb!`).catch(console.error);
        } else
        message.channel.send(`Status has been set to ${result}!`).catch(console.error);
    } else

    if (command === 'ping') {
        message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp}ms\``);
    } else

    if (command === 'send') {
        client.channels.get('308720869545476100').send('hello from another dimension XD!');
    } else 

    if (command === 'lol') {
        message.channel.send('why are we here? Just to suffer?');
    } else
    
    if (command === 'setgame') {
        if (!result) {
            message.channel.send('Please say the game you want me to display. Ex: ``/setgame /help | NewGen``').catch(console.error);
            return;
        } else
        
        if (result === 'end') {
            client.user.setGame().catch(console.error);
            message.channel.send(`Game has been reset!`).catch(console.error);
            return;
        } else
        client.user.setGame(result)
        message.channel.send(`Game has been set to ${result}!`);
    } else

    if (command === 'join') {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan || voiceChan.type !== 'voice') {
			message.channel.send('No').catch(error => console.log(error))
		} else if (message.guild.voiceConnection) {
			message.channel.send('I\'m already in a voice channel');
		} else {
			message.channel.send('Joining...').then(() => {
				voiceChan.join().then(() => {
					message.channel.send('Joined successfully.').catch(error => console.log(error));
				}).catch(error => console.log(error));
			}).catch(error => console.log(error))
		}
	} else

	if (command === 'leave') {
		let voiceChan = message.member.voiceChannel;
		if (!voiceChan) {
			message.channel.send('I am not in a voice channel');
		} else {
			message.channel.send('Leaving...').then(() => {
				voiceChan.leave();
			}).catch(error => console.log(error))
		}
	} else

    if (command === 'roll') {
    var roll = Math.floor(Math.random() * result) + 1;
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
    let members = message.guild.memberCount
    message.reply(`We currently have ${members} members!`).catch(console.error);
  } else if (command === 'membercount') {
    let members = message.guild.memberCount
    message.reply(`We currently have ${members} members!`).catch(console.error);
  } else

  if (command === 'test') {
        message.channel.send("", {embed: {
    color: 3447003,
    description: "test\n*test*\n**test**\n***test***"
    }});
  } else

  if (command === 'embed') {
      if (!["1752220", "3066993", "3447003", "10181046", "15844367", "15105570", "15158332", "9807270", "8359053", "3426654", "1146986", "2067276", "2123412", "7419530", "12745742", "11027200", "10038562", "9936031", "12370112", "2899536"].includes(args[0])) {
          message.channel.send('Please enter the command in the correct format. You enter it like this:\n``<embed color words``\nFor example, this command would do this. ``<embed 15844367 Hello there!``');
          message.channel.send("", {embed: {
          color: 15844367,
          description: `Hello there!`
          }});
      } else
        message.channel.send("", {embed: {
    color: args.shift(),
    description: `${args.join(" ")}`
    }});
  } else

  if (command === 'embed-colors') {
      message.channel.sendCode("", "DEFAULT: 0\nAQUA: 1752220\nGREEN: 3066993\nBLUE: 3447003\nPURPLE: 10181046\nGOLD: 15844367\nORANGE: 15105570\nRED: 15158332\nGREY: 9807270\nDARKER_GREY: 8359053\nNAVY: 3426654\nDARK_AQUA: 1146986\nDARK_GREEN: 2067276\nDARK_BLUE: 2123412\nDARK_PURPLE: 7419530\nDARK_GOLD: 12745742\nDARK_ORANGE: 11027200\nDARK_RED: 10038562\nDARK_GREY: 9936031\nLIGHT_GREY: 12370112\nDARK_NAVY: 2899536");
  } else return;
});

// END OF COMMANDS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
    if (message.author.bot) return;
    m = message.content
    m = m.toLowerCase();

    if (m === "yummy") {
        message.channel.send("pie!");
    }

    if (m === "goomba") {
        message.channel.sendFile("https://upload.wikimedia.org/wikipedia/en/c/ce/Goomba.PNG").then.message.sendFile("http://www.webklik.nl/user_files/2011_05/262609/Paper_Mario/Paper_Goomba_special.jpg")
    }
});

// END OF MESSAGES --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Leaving a Guild
client.on('guildDelete', guild => {
    console.log(`I have left ${guild.name} at ${new Date()}`);
});

// Joining a Guild
client.on('guildCreate', guild => {
    console.log(`I have joined ${guild.name} at ${new Date()}`);
});
// Someone joins the Guild
client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!`)
});
// Someone leaves the Guild
client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.send(`Please say goodbye to ${member.user.username}! We'll miss you!`)
    guild.defaultChannel.send("jk")
});

// Member Updates (Roles, Kicks, etc)
client.on('guildMemberUpdate',(oMember, nMember) => {
    console.log(ddiff(oMember, nMember));
});

// Guild Updates (Region Change, Name Change, etc)
client.on('guildUpdate',(oGuild, nGuild) => {
    console.log(ddiff(oGuild, nGuild));
});

// When someone is banned
client.on('guildBanAdd',(guild, user) => {
    guild.defaultChannel.send(`${user.username} was just banned!`);
});

// When someone is unbanned
client.on('guildBanRemove',(guild, user) => {
    guild.defaultChannel.send(`${user.username} was just unbanned!`);
});

client.on('guildUnavailable', guild => {
    return;
});
// When a channel has been created
client.on('channelCreate', channel => {
    console.log(`A ${channel.type} by the name of ${channel.name} was created at ${channel.createdAt} with the ID of ${channel.id}`);
    if (channel.type === 'text') return channel.send('You were successful in creating this channel.');
});
// When a channel has been deleted
client.on('channelDelete', channel => {
    console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
    channel.guild.defaultChannel.send(`**${channel.name}** was successfully deleted.`);
});
// When a channel has been updated, such as it's topic
client.on('channelUpdate', (oChannel, nChannel) => {
    console.log(ddiff(oChannel, nChannel));
});

// Displays a message that was deleted
client.on('messageDelete', message => {
    if (message.author.bot) return;
    guild = message.guild
    console.log(`A message containing "${message.cleanContent}" was deleted from ${message.channel.name} sent by ${message.author.username} at ${moment().format("MMMM Do[,] YYYY [at] hh:mm A")} EST`);
    guild.defaultChannel.send(`A message containing "${message.cleanContent}" was deleted from ${message.channel.name} sent by **${message.author.username}** at **${moment().format("MMMM Do[,] YYYY")}** at **${moment().format("hh:mm A")}** EST`);
});

// Detects the purge command
client.on('messageDeleteBulk', messages => {
    console.log(`${messages.size} was deleted`);
});

client.on('roleCreate', role => {
    let guild = role.guild;
    guild.defaultChannel.send(`A new role called ${role.name} has been created.`);
});

client.on('roleDelete', role => {
    let guild = role.guild;
    guild.defaultChannel.send(`A role called ${role.name} has been deleted.`);
});

client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let count = guild.memberCount;
  member.send("", {embed: {
    color: 3447003,
    description: `We have ${count} members xd`
  }});
});

/* Disabled Logs --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- Typing Start
client.on('typingStart', (channel, user) => {
    console.log(`${user.username} has begun typing in ${channel.name}.`);
});

- Typing End
client.on('typingStop', (channel, user) => {
    console.log(`${user.username} has stopped typing in ${channel.name}.`);
});

- Notifies when pins have changed
client.on('channelPinsUpdate', (channel, time) => {
    channel.guild.defaultChannel.send(`The pins for ${channel.name} have been updated at ${time}!`);
});
- Notifies when someone begins speaking
client.on('guildMemberSpeaking', (member, speaking) => {
    let guild = member.guild;
    if (member.speaking) {
        guild.defaultChannel.send(`${member.user.username} is speaking!`).catch(console.error);
    }
});
- When a reaction is added (DOESN'T WORK)
client.on('messageReactionAdd', (messageReaction, user) => {
    let guild = messageReaction.guild;
    guild.defaultChannel.send(`${user} has reacted with ${messageReaction}!`);
});


*/


function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}

client.login(settings.token);