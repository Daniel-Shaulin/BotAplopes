
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    enviarMensagem(client, message, args);

};

function enviarMensagem(client, message, args) {
    let fetch = require('isomorphic-fetch');
    const data = JSON.parse('{"content":"testando envio"}');
    console.log(data);
    fetch("https://discord.com/api/webhooks/931524060507176990/yOV3--osyFvlFgINunnl0UO-ZjKYFpRuJ9eKBmYXGZ_YGF2j7UpmVSPQQCwA1GlGGxag", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            //'Accept': '*/*'
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log(response.status);
        if (response.status != 200) {
            console.log(response.status + " : " + response.statusText);
        }
        return response.text();
    }).then(function (json) {

        message.delete().catch(O_o => { });
        message.channel.send("Mensagem enviada!");
    }).catch(function (err) {
        console.log(err);
    });
}