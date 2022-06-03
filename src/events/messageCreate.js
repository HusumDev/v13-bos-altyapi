const discord = require("discord.js")
const chalk = require("cli-color")

module.exports = {
	name: 'messageCreate',
	execute(message, client) {
    if (message.author.bot || message.channel.type === 'dm') return;
    
    if (message.content.indexOf(client.config.Client.PREFIX) !== 0) return;  
    
    const args = message.content.slice(client.config.Client.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if(!cmd) return;

    cmd.execute(client, message, args);

},
}