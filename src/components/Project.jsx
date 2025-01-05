import { Carousel } from "flowbite-react";

const images = import.meta.glob("../assets/images/skills/*.{png,jpg,jpeg,svg}", { eager: true });
export function Project() {
	const imageList = Object.values(images).map((image, index) => {
		return (
			<img
				key={index}
				src={image.default}
				alt={`Image ${index + 1}`}
				className="h-36 w-h-36 transition ease-in-out duration-700 transform hover:scale-110 cursor-pointer"
			/>
		);
	});
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
			<Carousel>{imageList}</Carousel>
		</div>
	);
}
