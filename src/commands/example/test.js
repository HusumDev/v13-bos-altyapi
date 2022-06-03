const discord = require("discord.js")

module.exports = {
    name: 'test',
    aliases: [],
    description: "Test",

    execute(client, message, args) {
        message.reply({content: `Bu bir testtir!`})
        .then(m => m.react("🔥"))
    },
}