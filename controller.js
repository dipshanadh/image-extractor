const puppeteer = require("puppeteer")
const path = require("path")

const controller = async (req, res) => {
	try {
		const URL = req.query.url

		const browser = await puppeteer.launch()
		const page = await browser.newPage()

		await page.goto(URL)

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

		const images = getImages.map(image => ({
			...image,
			fileName: path.basename(image.src),
			fileFormat: path.extname(image.src),
		}))

		await browser.close()

		res.send({
			success: true,
			images,
		})
	} catch (error) {
		console.log(error)

		res.status(500).json({
			success: false,
			error: "Something went wrong...",
		})
	}
}

module.exports = controller
