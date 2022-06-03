const fs = require("fs")

module.exports = (client) => {
    require("./clientLoader.js")(client)
    require("./commandLoader.js")(client)
    require("./databaseLoader.js")(client)
    require("./eventLoader.js")(client)
}