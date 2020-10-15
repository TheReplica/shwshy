const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('PURPLE')
.addField('GifForest NSFW Menüsü',`
**:white_small_square: = \`s!nsfw\` : Genel Konulu Gif Gönderir.**
**:white_small_square: = \`s!tits\` : Tits Konulu Gif Gönderir.**
**:white_small_square: = \`s!pussy\` : Pussy Konulu Gif Gönderir.**
**:white_small_square: = \`s!ass \` : Ass Konulu Gif Gönderir.**
**:white_small_square: = \`s!blowjob\` : Blowjob Konulu Gif Gönderir.**
**:white_small_square: = \`s!cumshots\` : Cumshots Konulu Gif Gönderir.**
**:white_small_square: = \`s!gifsayı\` : Gif sayısını öğrenebilirsiniz.**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=719355278885257226&scope=bot&permissions=126016)`)
.setThumbnail(client.user.avatarURL)
message.react("🍆")
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 