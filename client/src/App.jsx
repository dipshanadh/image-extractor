import { useState } from "react"

import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import ImageContainer from "./components/ImageContainer"
import MainSection from "./components/MainSection"

const App = () => {
	const [images, setImages] = useState([])

	return (
		<>
			<MainSection setImages={setImages} />
			{images && <ImageContainer images={images} />}
			<HowItWorks />
			<Footer />
		</>
	)
}

export default App
