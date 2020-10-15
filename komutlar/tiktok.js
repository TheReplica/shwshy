const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('WHITE')
.addField('Çavuş Bot TikTok Arşivi',`
**:gem: = \`TikTok Arşivi\` : [Tıkla!](https://server7.dosya.co/cgi-bin/azcl9.cgi/dvpz3txz5kdbqy5jdk7b2qlpf4snqg2gdg2k6ku4ua/18%20TikTok.rar)**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=719355278885257226&scope=bot&permissions=126016) **|** [Destek Sunucusu](https://discord.gg/f64PZ9) **|** `)
.setThumbnail("https://cdn.discordapp.com/attachments/753328709368545310/753329489580130334/1_HllKjYQ7RmJS0BLNSpfeJQ.png")
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [""], 
  permLevel: 0
};
exports.help = {
  name: 'tiktok'
}; 