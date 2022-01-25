const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
    //const sayMessage = args.join(" ");
    console.log(args);
    var message = "";
    agrs.forEach(item => {
        if (!item.includes('<@!').then(() => {
            message = message + item;
        });
    });


    message.mentions.users.forEach(item => {
        console.log(item.id);
        client.users.fetch(item.id, false).then((user) => {
            user.send("testando");
        });
    });
   // console.log(message);
    
    //console.log(sayMessage);
    message.delete().catch(O_o => { });
    //message.channel.send(sayMessage);
}