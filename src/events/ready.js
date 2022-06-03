const chalk = require("cli-color")
const discord = require("discord.js")

const get = new (require("rss-parser"))();

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        process.title = `${client.user.username} is Ready! | Bothane Development [${client.commands.size} Commands]`
        console.log(chalk.yellowBright("[*]") + chalk.blackBright(" Client aktif"))
        // Oynuyor ayarlama,
        setActivity();
        console.log(chalk.yellowBright("[*]") + chalk.blackBright(" Durum ayarlandı"))
        
        if(client.config.Client.Refresh) {
            setInterval(() => {
                setActivity();
            }, 1000 * 60 * 5);
        }

        function setActivity() {
        let activity = client.config.Client.Activity
        .replace("[guilds]", client.guilds.cache.size)
        .replace("[users]", client.users.cache.size)

        client.user.setActivity(activity)
        }
    },

}