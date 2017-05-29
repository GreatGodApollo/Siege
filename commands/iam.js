const RichEmbed = require("discord.js").RichEmbed;
const unassignable = require('../unassignable.json');
exports.run = (client, message, params) => {
  // Define guild
  let guild = message.guild

  // define the message author so that it can give a role
  let RoleMember = guild.member(message.author);

  // Args
  let RoleAssigned = params.join(` `)

  // Finds the role that was specified
  let assignedRole = message.guild.roles.find('name', `${RoleAssigned}`);

    // if role isn't said there return
  if (!assignedRole) return message.channel.send({embed: {description: `<@${message.author.id}>, I cannot find a **${RoleAssigned}** role`, color: 15158332}});

  // check if the role is unassignable

  if (unassignable[assignedRole.id]) return message.channel.send({embed: {description: `<@${message.author.id}>, **${RoleAssigned}** isn't self assignable.`, color: 15158332}});

// tell the user the role was added
  message.channel.send({embed: {description: `The role **${RoleAssigned}** has been added to <@${message.author.id}>`, color: 15158332}})

  // add the role
  RoleMember.addRole(assignedRole)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'iam',
  description: `Gives yourself a role. Level: Broken`,
  usage: 'iam [role name]'
};
