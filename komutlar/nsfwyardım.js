const Discord = require('discord.js');


exports.run = function(client, message) {
            if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new Discord.RichEmbed()
        .setDescription("↬Komutu kullandığınız kanal bir **NSFW(Not Safe For Work)** kanalı olmadığı için bot gif gönderemedi. \n\n ◦Eğer 18 yaşından büyük iseniz **Kanalı Düzenle** > **Genel Görünüm**'e girin ve oradaki **NSFW Kanal** seçeneğini aktif ederek NSFW komutlarını kullanabilirsiniz.\n\n◦18 yaşından küçük iseniz NSFW komutları sizin için **hiç uygun değildir** ve kullanmanız asla tavsiye edilmez.")
        .setColor("#fabec8")
        .setImage('https://cdn.discordapp.com/attachments/737846219044290581/738449806158069780/Adsz.png')
        .setFooter("Developed By Replica")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'nsfw-yardım', 
  description: 'nsfw-yardım',
  usage: 'nsfw-yardım'
};
