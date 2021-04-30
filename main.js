const Discord = require('discord.js');
const client = new Discord.Client();

var allQueues = [];

const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('The Fall Guy');
});

client.on('message', async message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if(command === 'createqueue') {
        client.commands.get('createqueue').execute(message, args, allQueues);
    } else if(command === 'joinqueue') {
        client.commands.get('joinqueue').execute(message, args, allQueues);
    } else if(command === 'leavequeue') {
        client.commands.get('leavequeue').execute(message, args, allQueues);
    } else if(command === 'leaveallqueues') {
        client.commands.get('leaveallqueues').execute(message, args, allQueues);
    } else if(command === 'viewqueue') {
        client.commands.get('viewqueue').execute(message, args, allQueues);
    } else if(command === 'listqueues') {
        client.commands.get('listqueues').execute(message, args, allQueues);
    }
});

client.login('(Insert Your Private Discord Bot Key)');