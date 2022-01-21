
console.log("NodeJS Version: " + process.version);

const express = require('express');

const date = require('date-and-time');

const app = express();
app.get("/", (request, response) => {
  const ping = new Date(Date.now());
  ping.setHours(ping.getHours() - 3);
  const value = date.format(ping,'DD/MM/YYYY HH:mm:ss');
  console.log(`ping feito ás ${value}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT); //Recebe a solicitações que o deixa online

const { Client, Intents } = require('discord.js');//conexão com a livraria discord.js

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//Criação de um novo cliente

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comando

client.login(process.env['TOKEN']); //Ligando o bot caso ele consiga acessar o token

client.on("messageCreate",  message=> {
  if(message.author.bot) return;
  //if(message.channel.type = "dm") return;
  if(!message.content.toLowerCase().startsWith(config.prefix)) return;
  if(message.content.toLowerCase().startsWith(client.user.id)) return;

  const args = message.content.trim().slice(config.prefix.lenght).split(/ +/g);

  const command = args.shift().toLowerCase(); 
  try{
    const commandFile = require("./commands/"+[command.replace("?", "")]+".js")
    commandFile.run(client ,message, args);
  }catch(err){
    //console.error("erro"+err);
  }
});
