const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('PURPLE')
.addField('Shwshy NSFW Menüsü',`
:white_small_square: = **NSFW** : Botun hafızasında **\`359\`** adet gif bulunuyor.
:white_small_square: = **Tits** : Botun hafızasında **\`279\`** adet gif bulunuyor.
:white_small_square: = **Pussy** : Botun hafızasında **\`178\`** adet gif bulunuyor.
:white_small_square: = **Ass**  : Botun hafızasında **\`186\`** adet gif bulunuyor.
:white_small_square: = **Blowjob** : Botun hafızasında **\`143\`** adet gif bulunuyor.
:white_small_square: = **Cumshots** : Botun hafızasında **\`144\`** adet gif bulunuyor.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=719355278885257226&scope=bot&permissions=126016) **|** [Destek Sunucusu](https://discord.gg/f64PZ9) **|** `)
.setThumbnail(client.user.avatarURL)
message.react("🍆")
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [""], 
  permLevel: 0
};
exports.help = {
  name: 'gifsayı'
}; 