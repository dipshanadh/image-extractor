const ImageItem = ({ image }) => {
	const { fileName, alt, src, fileFormat } = image

	return (
		<div>
			<div className="bg-white rounded-md shadow-green-100 h-full flex flex-col justify-between app-image relative transition-all duration-200 transform hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-xl focus-within:z-20">
				<div>
					<div className="w-full relative mb-auto">
						<div className="left-0 w-full h-full p-6 flex-1">
							<div className="rounded-md w-full h-full overflow-hidden bg-green-50">
								<img
									src={src}
									alt={alt}
									className="object-scale-down h-full w-full cursor-pointer"
								/>
							</div>
						</div>
					</div>
					<div className="px-6 pb-4 mt-auto">
						<div className="flex justify-between overflow-hidden">
							<div className="font-normal overflow-hidden">
								{fileName}
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-3 border-t border-gray-200 flex flex-wrap items-center justify-between">
					<a href={src} target="_blank">
						<svg
							fill="#000000"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24px"
							height="24px"
						>
							<path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
						</svg>
					</a>
					<div className="bg-green-50 text-gray-600 p-1 rounded-md">
						{fileFormat}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageItem
