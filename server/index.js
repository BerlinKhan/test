const express = require("express")
const app = express()

app.use('/', (req, res) =>
    res.send("server is runniing")
)

app.listen(5000, console.log("server running on port 5000"))