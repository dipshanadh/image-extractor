// Importing all dependencies
const express = require("express")
const cors = require("cors")
const path = require("path")

// Importing controller
const controller = require("./controller")

// Initializing the app
const app = express()

// Mounting the /api route
app.get("/api", controller)

// Startic folder for serving the frontend
app.use(express.static("./client/dist"))

// Cors
app.use(cors())

// Send the frontend, when requested to any route except /api
app.get("*", (req, res) =>
	res.sendFile(path.join(__dirname, "/client/dist/index.html"))
)

const PORT = process.env.PORT || 5000

// Listening to the app
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
