const express = require("express")
const cors = require("cors")
const path = require("path")

const controller = require("./controller")

const app = express()

app.get("/api", controller)

app.use(express.static("./client/dist"))
app.use(cors())

app.get("*", (req, res) =>
	res.sendFile(path.join(__dirname, "/client/dist/index.html"))
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
