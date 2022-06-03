const fs = require("fs")
const discord = require("discord.js")
const chalk = require("cli-color")

module.exports = (client) => {
    client.commands = new discord.Collection();

    fs.readdirSync("./src/commands/").forEach(dirs => {
        const commands = fs.readdirSync(`./src/commands/${dirs}`).filter(file => file.endsWith(".js"));
        console.log(chalk.cyanBright("[i] ") + chalk.yellowBright(`${dirs}`) + " Klasöründen " + chalk.greenBright(`${commands.length}`) + " komut yüklendi.");
        for (const file of commands) {
            const command = require(`../commands/${dirs}/${file}`);
            if(!command.name) return console.log(chalk.redBright("[ERROR]") + chalk.redBright(` ${file} komutu için "name" alanı bulunamadı.`));
            client.commands.set(command.name.toLowerCase(), command);
            delete require.cache[require.resolve(`../commands/${dirs}/${file}`)];
        }
    });
}