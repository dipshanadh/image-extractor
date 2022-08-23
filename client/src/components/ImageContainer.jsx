import ImageItem from "./ImageItem"

const ImageContainer = ({ images }) => (
	<div className="px-10 pt-16 pb-10 flex-1" id="image-container">
		<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6">
			{images.map(image => (
				<ImageItem image={image} key={image.id} />
			))}
		</div>
	</div>
)

export default ImageContainer
