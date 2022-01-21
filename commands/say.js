const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{
  
  const sayMessage = args.join(" ");
  console.log(sayMessage);
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
}