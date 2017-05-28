const moment = require('moment');
require('moment-timezone'); 
exports.run = (client, message, params) => {
    if (params.length === 0) {
        message.channel.send("Please mention a legal timezone you want to identify. The options are ``eastern | central | mountain | pacific``\nAn example usage would be ``s/time eastern``").catch(console.error);
    } else if (!["eastern", "central", "mountain", "pacific"].includes(params[0])) {
        message.channel.send("Please mention a legal timezone you want to identify. The options are ``eastern | central | mountain | pacific``\nAn example usage would be ``s/time eastern``").catch(console.error);
    } else if (params[0] === "eastern") {
        message.channel.send(`The current time for Eastern Standard Time is:\n**${moment.tz('America/New_York').format('h:mm A')}**`).catch(console.error);
    } else if (params[0] === "central") {   
        message.channel.send(`The current time for Central Standard Time is:\n**${moment.tz('America/Cancun').format('h:mm A')}**`).catch(console.error);
    } else if (params[0] === "mountain") {   
        message.channel.send(`The current time for Mountain Standard Time is:\n**${moment.tz('America/Chihuahua').format('h:mm A')}**`).catch(console.error);
    } else if (params[0] === "pacific") {   
        message.channel.send(`The current time for Pacific Standard Time is:\n**${moment.tz('America/Los_Angeles').format('h:mm A')}**`).catch(console.error);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['t'],
  permLevel: 0
};

exports.help = {
  name: 'time',
  description: `Displays the time for the given timezone. Level: ${exports.conf.permLevel}`,
  usage: 'time [timezone]'
};
