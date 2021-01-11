const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === prefix + 'ping') {

       message.reply('pong!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
