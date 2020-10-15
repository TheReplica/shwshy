const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('PURPLE')
.addField('Çavuş Bot Oyun Menüsü',`
**:white_small_square: = \`Blok Kırmaca\` : [Tıkla ve oyna!](https://mini-breakout.glitch.me/)**
**:white_small_square: = \`Hafıza Oyunu\` : [Tıkla ve oyna!](https://memory-game.glitch.me/)**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=719355278885257226&scope=bot&permissions=126016) **|** [Destek Sunucusu](https://discord.gg/f64PZ9) **|** `)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [""], 
  permLevel: 0
};
exports.help = {
  name: 'oyunlar'
}; 