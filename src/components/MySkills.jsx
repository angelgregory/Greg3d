import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const images = import.meta.glob("../assets/images/skills/*.{png,jpg,jpeg,svg}", { eager: true });
const MySkills = ({ isClose, setIsClose }) => {
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
		<div>
			<div className="fixed top-0 left-0 h-screen w-screen z-20 backdrop-blur-sm">
				<div className="w-full h-full flex justify-center items-center">
					<div className="bg-white portrait:w-full portrait:h-full landscape:h-[75%] portrait:aspect-[9/16] landscape:aspect-video rounded-2xl  overflow-y-auto  relative p-10">
						<div className="flex justify-center items-center text-center mb-10">
							<IoCloseSharp
								className=" text-slate-800 absolute top-0 right-0 m-5 cursor-pointer"
								size={30}
								onClick={() => {
									setIsClose(true);
								}}
							/>
							<div>
								<h1 className="font-bold text-3xl">Skills Rack</h1>
								<div className="flex justify-center list-none flex-wrap gap-5  no-scrollbar h-full rounded-lg mt-10">
									{imageList}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
