const Discord = require('discord.js');
module.exports.run = async(client, message, args) =>{

  testeIsomorphic(client, message, args);

  //testeNode();
};

function testeIsomorphic(client, message, args){
  let fetch = require('isomorphic-fetch');
  var a = "";
  fetch("http://api-dev.idolink.com.br/ido-business/wallpaper-template/colors", {
    method: 'GET',
    headers: {
        //'Accept': 'application/json',
        'Accept':'*/*'
        //'Content-Type': 'application/json'
    }
}).then(function (response) {
    if (response.status != 200) {
        dispatch(setError(response.status + '===>' + response.statusText + '===>' + response.url))
    }
    return response.json();
}).then(function (json) {
  a = json;
  console.log(a);
}).catch(function(err){
    console.log(err);
});
  message.delete().catch(O_o => {});
 // message.channel.send(a);
}

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