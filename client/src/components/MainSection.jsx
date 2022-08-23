import { useState } from "react"

const MainSection = ({ setImages }) => {
	const [loading, setLoading] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		const url = e.target.url.value

		setLoading(true)

		fetch(`/api?url=${url}`)
			.then(res => res.json())
			.then(data => {
				setImages(data.images)
				setLoading(false)
				document.getElementById("image-container").scrollIntoView()
			})
			.catch(err => {
				setLoading(false)
			})
	}

	return (
		<section className="text-gray-400 body-font bg-[#252331]">
			<div className="dark-bg container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-lg">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Image Extractor
					</h1>
					<p className="mb-8 leading-relaxed">
						Extract all the images from any website and webpages
					</p>
					<div className="flex w-full md:justify-start justify-center items-end">
						<form
							className="flex w-full md:justify-start justify-center items-end"
							onSubmit={handleSubmit}
						>
							<div className="relative mr-4 w-full xl:w-1/2">
								<label
									htmlFor="url"
									className="leading-7 text-sm text-gray-400"
								>
									Url of Website
								</label>
								<input
									type="url"
									id="url"
									name="url"
									placeholder="Eg: https://dipshanadhikari.com.np"
									className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									required
								/>
							</div>
							<button
								type="submit"
								className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
								disabled={loading}
							>
								{loading ? "Fetching..." : "Extract"}
							</button>
						</form>
					</div>
					<p className="text-sm mt-2 text-gray-500 mb-8 w-full">
						simply scrapes all images from website
					</p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="/img2.png"
					/>
				</div>
			</div>
		</section>
	)
}

export default MainSection
