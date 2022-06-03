const { JsonDatabase } = require("wio.db")
module.exports = (client) => {
    client.db = new JsonDatabase({ databasePath: "./src/DataCenter/database.json" })
}