const chalk = require("cli-color")
module.exports = (client) => {
    client.login(client.config.Client.TOKEN)
    .catch((err) => {
        console.log(err)
        console.log(chalk.red("Client failed to login."))
        process.exit(1)
    })
}