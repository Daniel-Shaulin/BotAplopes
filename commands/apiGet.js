const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {

    get(client, message, args);

    //testeNode();
};



function get(client, message, args) {
    let fetch = require('isomorphic-fetch');
    var a = "";
    fetch("https://discord.com/api/webhooks/931524060507176990/yOV3--osyFvlFgINunnl0UO-ZjKYFpRuJ9eKBmYXGZ_YGF2j7UpmVSPQQCwA1GlGGxag", {
        method: 'GET',
        headers: {
            //'Accept': 'application/json',
            'Accept': '*/*'
            //'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.status != 200) {
            dispatch(setError(response.status + '===>' + response.statusText + '===>' + response.url))
        }
        return response.text();
    }).then(function (json) {
        message.delete().catch(O_o => { });
        console.log(a);
    }).catch(function (err) {
        console.log(err);
    });
}