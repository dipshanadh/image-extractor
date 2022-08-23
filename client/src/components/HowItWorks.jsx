const HowItWorks = () => (
	<div className="flex-1">
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<h1 className="text-center text-3xl font-semibold mb-8">
					How Does it Works?
				</h1>
				<div className="flex flex-wrap w-full justify-center">
					<div className="max-w-2xl md:pr-10 md:py-6 justify-center">
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
							</div>
							<div className="flex-grow pl-4">
								<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									STEP 1
								</h2>
								<p className="leading-relaxed">
									First, it gets the page url from the
									frontend and passes to the backend for
									scraping.
								</p>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow pl-4">
								<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									STEP 2
								</h2>
								<p className="leading-relaxed">
									The backend gets the web page and searches
									for all &lt;img&gt; tags in that page, and
									from all those img tags, it searches for
									"src" and "alt" attribute, and stores it in
									an array.
								</p>
							</div>
						</div>
						<div className="flex relative pb-12">
							<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow pl-4">
								<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									STEP 3
								</h2>
								<p className="leading-relaxed">
									After that, it maps that array and uses the
									path module to find the file name and image
									formats such as png, jpg, and webp.
								</p>
							</div>
						</div>
						<div className="flex relative">
							<div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
									<path d="M22 4L12 14.01l-3-3"></path>
								</svg>
							</div>
							<div className="flex-grow pl-4">
								<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
									FINISH
								</h2>
								<p className="leading-relaxed">
									Everything, including image file names,
									urls, and formats, is packed into an array
									of object and rendered.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default HowItWorks
