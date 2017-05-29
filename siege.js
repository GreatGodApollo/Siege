const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const ddiff = require('return-deep-diff');
const moment = require('moment'); 

// We dont need 8ball, i can make an 8ball command without an npm package ~Olykir
const fs = require('fs');
require('moment-timezone'); 
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}...Complete`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let vip_role = message.guild.roles.find('name', settings.viprolename);
  if (vip_role && message.member.roles.has(vip_role.id)) permlvl = 1;
  let mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};

/*
client.on('message', message => {
    if (message.author.bot) return;
    message.channel.send('', {embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'This is an embed',
    url: 'http://google.com',
    description: 'This is a test embed to showcase what they look like and what they can do.',
    fields: [{
        name: 'Fields',
        value: 'They can have different fields with small headlines.'
      },
      {
        name: 'Masked links',
        value: 'You can put [masked links](http://google.com) inside of rich embeds.'
      },
      {
        name: 'Markdown',
        value: 'You can put all the *usual* **__Markdown__** inside of them.'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Example'
    }
  }
    });
});
*/
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

    if (m === "thinkworld") {
        message.channel.sendFile("http://i.imgur.com/GLVkKLv.gif")
    }
});

// END OF MESSAGES ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Disabled Logs --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Typing Start
client.on('typingStart', (channel, user) => {
    console.log(`${user.username} has begun typing in ${channel.name}.`);
});

// Guild Updates (Region Change, Name Change, etc)
client.on('guildUpdate',(oGuild, nGuild) => {
    console.log(ddiff(oGuild, nGuild));
});

// When a guild is Unavailable
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

// When a role has been created
client.on('roleCreate', role => {
    let guild = role.guild;
    guild.defaultChannel.send(`A new role called ${role.name} has been created.`);
});

// When a role has been deleted
client.on('roleDelete', role => {
    let guild = role.guild;
    guild.defaultChannel.send(`A role called ${role.name} has been deleted.`);
});

// Random Test (BROKEN)
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let count = guild.memberCount;
  member.send("", {embed: {
    color: 3447003,
    description: `We have ${count} members xd`
  }});
});

// Typing End
client.on('typingStop', (channel, user) => {
    console.log(`${user.username} has stopped typing in ${channel.name}.`);
});

// Notifies when pins have changed
client.on('channelPinsUpdate', (channel, time) => {
    channel.guild.defaultChannel.send(`The pins for ${channel.name} have been updated at ${time}!`);
});

// Notifies when someone begins speaking
client.on('guildMemberSpeaking', (member, speaking) => {
    let guild = member.guild;
    if (member.speaking) {
        guild.defaultChannel.send(`${member.user.username} is speaking!`).catch(console.error);
    }
});

// When a reaction is added (DOESN'T WORK)
client.on('messageReactionAdd', (messageReaction, user) => {
    let guild = messageReaction.guild;
    guild.defaultChannel.send(`${user} has reacted with ${messageReaction}!`);
});
*/


function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.login(settings.token);
