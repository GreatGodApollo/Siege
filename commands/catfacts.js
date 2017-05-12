exports.run = async (client, msg) => {
  msg.delete();
  const rp = require("request-promise-native"); // eslint-disable-line global-require
  try {
    const res = await rp.get("http://catfacts-api.appspot.com/api/facts").then(JSON.parse);
    msg.channel.send(`📢 **Catfact:** *${res.facts[0]}*`);
  } catch (e) {
    client.funcs.log(e, "error");
  }
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ['kittenfact'],
  permLevel: 0
};
exports.help = {
  name: 'catfact',
  description: 'Tells you a cat fact. Level: Everyone',
  usage: ''
};
