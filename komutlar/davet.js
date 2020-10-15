const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle(`<a:747261387444715541:747261387444715541> Shwshy Bot Davet Menüsü <a:747261387444715541:747261387444715541>`)
.addField(`» Sunucuna Ekle`, `[Tıkla ve Yönel](https://discordapp.com/oauth2/authorize?client_id=719355278885257226&scope=bot&permissions=126016)`)
.setTimestamp()
.setFooter(`Developed By Replica`, 'https://images-ext-1.discordapp.net/external/YpSQPIb7ygY2vl-KBhaRJCGvNs5RsAst6i0eczHwF0o/%3Fwidth%3D671%26height%3D671/https/images-ext-1.discordapp.net/external/3evwa30mp1W_l2i7bzCcfvMcaFhW8QwApa-vlE7CXVo/%253Fsize%253D2048/https/cdn.discordapp.com/avatars/719355278885257226/26bbecee1b70cdd64e709576db73c949.png')
.setColor(0xff7f00)
.setThumbnail(client.user.avatarURL)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet',
    description: 'Botun davet linkini gönderir.',
    usage: ''
  };