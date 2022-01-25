const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{

  enviarMensagem(client, message, args);

  //testeNode();
};


function testeNode(){
  const fetch = require('node-fetch');
  console.log("Iniciando busca...");
  fetch('http://api-dev.idolink.com.br/ido-business/wallpaper-template/colors')
    .then(res => res.text())
    .then(text => console.log(text));
}

function a(){
  fetch("http://177.53.20.17:8086/plano-numeracao")
    .then(response=> {
        console.log("aki");
       // console.log(response.text());
        return response.text()
    })
    .then(data=> {
       console.log("mentira");
        console.log(data);
    })
}