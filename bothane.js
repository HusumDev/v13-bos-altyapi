const discord = require("discord.js")
const chalk = require("cli-color")
const fs = require("fs")
const moment = require("moment")
require("moment-duration-format")
process.title = "Bothane Development"
const client = new discord.Client({ disableEveryone: true, intents: 98303 })

client.config = require("./config.json")
client.emoji = require("./emojis.json")

require("./src/loaders/loader")(client)

client.err = (baslık, err, footer) => {
    let embed = new discord.MessageEmbed()
    .setColor("RED")
    .setAuthor({name: `${baslık}`, iconURL: client.user.avatarURL()})
    .setDescription(`${client.emoji.hata.full} ${err}`)
    if(footer) embed.setFooter({text: `${footer}`, iconURL: client.user.avatarURL()})

    return embed;
}

process.on("unhandledRejection", (err) => {
    console.log(chalk.redBright("[ERROR HANDLER]") + chalk.redBright(` [${moment().format("DD.MM.YYYY HH:mm:ss")}];\n`) + chalk.yellowBright(`${err}`))
})