// Importing all dependencies
const puppeteer = require("puppeteer")
const path = require("path")

const controller = async (req, res) => {
	try {
		const URL = req.query.url

		// Opening the url using puppeteer to get the client side rendered content
		const browser = await puppeteer.launch()
		const page = await browser.newPage()

		await page.goto(URL)

		// Finding all the image tags and pushing the src to an array
		const getImages = await page.evaluate(() => {
			let images = []

			const imageTags = document.querySelectorAll("img")

			imageTags.forEach((image, index) => {
				images.push({
					id: index,
					src: image.src,
				})
			})

			return images
		})

		// Getting the fileName and fileFormat using path module
		const images = getImages.map(image => ({
			...image,
			fileName: path.basename(image.src),
			fileFormat: path.extname(image.src),
		}))

		await browser.close()

		// Sending the response with images
		res.send({
			success: true,
			images,
		})
	} catch (error) {
		console.log(error)

		// Sending error message if something goes wrong
		res.status(500).json({
			success: false,
			error: "Something went wrong...",
		})
	}
}

module.exports = controller
