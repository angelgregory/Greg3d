import { Carousel } from "flowbite-react";
import { generateImageList } from "../utils/ListImage";
const boticaPlus = import.meta.glob("../assets/BoticaPlus/*.{png,jpg,jpeg,svg}", { eager: true });
console.log(boticaPlus);
const ymir = import.meta.glob("../assets/Ymir/*.{png,jpg,jpeg,svg}", { eager: true });
const pillstop = import.meta.glob("../assets/PillStop/*.{png,jpg,jpeg,svg}", { eager: true });

export function Project() {
	const classNames = {
		horizontal: "aspect-video w-max border-blue-500",
		vertical: "h-fit border-red-500",
	};
	const bpImages = generateImageList(boticaPlus, classNames);
	const ymirImages = generateImageList(ymir, classNames);
	const pillstopImages = generateImageList(pillstop, classNames);

	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border-blue-500 border-solid border-2">
			<Carousel>{bpImages}</Carousel>
			<Carousel>{ymirImages}</Carousel>
			<Carousel>{pillstopImages}</Carousel>
		</div>
	);
}
