exports.run = async (client, message) => {
  const rp = require("request-promise-native"); // eslint-disable-line global-require
  try {
    const res = await rp.get("https://yande.re/post.json").then(JSON.parse);
    message.channel.send('**Yandere:**');
    message.channel.sendFile(`${res[1].file_url}`)
  } catch (e) {
    console.log(e, "error");
  }
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ['yandu'],
  permLevel: 0
};
exports.help = {
  name: 'yandere',
  description: `Displays yandere photo. Level: ${exports.conf.permLevel}`,
  usage: 'yandere <something>'
};