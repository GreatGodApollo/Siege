exports.run = async (client, message, args) => {

// The modules we are using are cheerio, snekfetch, and querystring for this.
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');

   let searchMessage = await message.reply('Searching... Sec.');
   let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(message.content)}`;

   return snekfetch.get(searchUrl).then((result) => {

      let $ = cheerio.load(result.text);

      let googleData = $('.r').first().find('a').first().attr('href');

      googleData = querystring.parse(googleData.replace('/url?', ''));
      searchMessage.edit(`Result found!\n${googleData.q}`);

  }).catch((err) => {
     searchMessage.edit('No results found!');
  });
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'google',
    description: 'Displays a link from google.',
    usage: 'google [search]'
  };
