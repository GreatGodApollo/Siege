exports.run = async (client, msg, [search, resultNum = 0], args) => {
  const rp = require("request-promise-native"); // eslint-disable-line global-require
  const baseUrl = "http://api.urbandictionary.com/v0/define?term=";
  const theUrl = baseUrl + search;
  try {
    const body = await rp.get(theUrl).then(JSON.parse);
    if (resultNum > 1) resultNum -= 1;  

    const result = body.list[resultNum];
    if (!result) throw new Error("No entry found.");
    const wdef = result.definition.length > 1000
      ? `${client.funcs.splitText(result.definition, 1000)}...`
      : result.definition;
    const title = [
      `**Word:** ${search}`,
      "",
        ].join("\n");
          const definition = [
      `**Definition:** ${resultNum += 1} out of ${body.list.length}\n_${wdef}_`,
      "",
      ].join("\n");
      const example = [
      `**Example:**\n${result.example}`,
      `<${result.permalink}>`,
    ].join("\n");

    await msg.channel.send({embed: {title: title, color: 15158332, description: `Defintion :: ${definition} ${example}`}});
  } catch (e) {
    msg.channel.send("No entry found.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'urban',
  description: `Searches the Dictionary. Level: ${exports.conf.permLevel}`,
  usage: 'urban <word>'
};