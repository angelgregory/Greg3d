import { Carousel, Flowbite } from "flowbite-react";
import { generateImageList } from "../utils/ListImage";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMui, SiSass } from "react-icons/si";

const boticaPlus = import.meta.glob("../assets/BoticaPlus/*.{png,jpg,jpeg,svg}", { eager: true });
const ymir = import.meta.glob("../assets/Ymir/*.{png,jpg,jpeg,svg}", { eager: true });
const pillstop = import.meta.glob("../assets/PillStop/*.{png,jpg,jpeg,svg}", { eager: true });

const customTheme = {
	root: {
		base: "relative h-full w-full",
		leftControl:
			"absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none bg-bright-red",
		rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
	},
	indicators: {
		active: {
			off: "bg-bright-red/50 hover:bg-bright-red dark:bg-gray-800/50 dark:hover:bg-gray-800",
			on: "bg-bright-red dark:bg-gray-800",
		},
		base: "h-3 w-3 rounded-full",
		wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
	},
	item: {
		base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
		wrapper: {
			off: "w-full flex-shrink-0 transform cursor-default snap-center",
			on: "w-full flex-shrink-0 transform cursor-grab snap-center",
		},
	},
	control: {
		base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
		icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
	},
	scrollContainer: {
		base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg bg-bright-red",
		snap: "snap-x",
	},
};

export function Project() {
	const classNames = {
		horizontal: "object-contain h-full w-full",
		vertical: "object-contain h-full w-full",
	};

	const bpImages = generateImageList(boticaPlus, classNames);
	const ymirImages = generateImageList(ymir, classNames);
	const pillstopImages = generateImageList(pillstop, classNames);

	const projects = [
		{
			title: "Botica Plus",
			description: "A comprehensive system for pharmacy inventory and sales management.",
			images: bpImages,
			technologies: [<FaReact />, <SiRedux />, <SiMui />, <SiSass />],
		},
		{
			title: "Ymir",
			description: "An advanced analytics dashboard with real-time updates.",
			images: ymirImages,
			technologies: [<FaReact />, <SiRedux />, <SiMui />, <SiSass />],
		},
		{
			title: "PillStop",
			description: "An online platform for ordering and tracking medications.",
			images: pillstopImages,
			technologies: [<FaReact />, <SiRedux />, <SiMui />, <SiSass />],
		},
	];

	return (
		<div className="space-y-8">
			{projects.map((project, index) => {
				console.log("👻 ~ project:", project);

				return (
					<div
						key={index}
						className="flex xl:flex-row items-center border-2 border-gray-300 rounded-lg p-4 gap-6"
					>
						{/* Title and Description */}
						<div className="flex flex-1 flex-col items-start space-y-4 max-w-4xl xl:w-1/3">
							<h2 className="text-2xl font-bold">{project.title}</h2>
							<p className="text-gray-600">{project.description}</p>
							{/* Technology Icons */}
							<div className="flex space-x-4 text-2xl text-blue-500">
								{project.technologies.map((icon, idx) => (
									<div key={idx} className="hover:text-blue-700">
										{icon}
									</div>
								))}
							</div>
						</div>
						{/* Carousel */}
						<div className="flex-1 h-56 sm:h-64 xl:h-80 2xl:h-96 w-1/2 border-2 rounded-lg">
							<Flowbite theme={{ theme: customTheme }}>
								<Carousel>{project.images}</Carousel>
							</Flowbite>
						</div>
					</div>
				);
			})}
		</div>
	);
}
