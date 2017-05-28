const RichEmbed = require("discord.js").RichEmbed;
exports.run = (client, message, args) => {
  // Define guild
  let guild = message.guild

  // define the message author so that it can give a role
  let RoleMember = guild.member(message.author);

  // Args
  let RoleAssigned = args.join(` `)

  // Finds the role that was specified
  let assignedRole = message.guild.roles.find('name', `${RoleAssigned}`);
  // unassignable roles
  let unassignable = ["314231989295120394"]

  // check if the role is unassignable




  // if role specified isent there return
  if (!assignedRole) return message.channel.send({embed: {description: `<@${message.author.id}>, I cannot find a **${RoleAssigned}** role`}});

// tell the user the role was added
  message.channel.send({embed: {description: `The role **${RoleAssigned}** has been added to <@${message.author.id}>`}})

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
  description: `Gives yourself a role. Level: Everyone`,
  usage: 'iam [role name]'
};
