import React, { useState } from "react";
import iframe from "./iframe.css?inline";
import folder from "../assets/images/folder.png";
import folderOpen from "../assets/images/folder-open.png";
import mail from "../assets/images/mail.png";
import mailOpen from "../assets/images/mail-open.png";
import bg from "../assets/images/desktop-bg.png";
import off from "../assets/images/turn-off.png";
import WorkFolder from "./WorkFolder";
import ProjectsFolder from "./ProjectsFolder";
import IFrame from "./IFrame";
import { useRef } from "react";

const MyWork = ({ isClose, setIsClose }) => {
	const [isWork, setIsWork] = useState(false);
	const [isWorkFolder, setIsWorkFolder] = useState(false);
	const [isProjectsFolder, setIsProjectsFolder] = useState(false);
	const ImageHover = ({ image1, image2, className }) => {
		const imageRef = useRef(null);

		return (
			<img
				onPointerEnter={() => {
					imageRef.current.src = image2;
				}}
				onPointerLeave={() => {
					imageRef.current.src = image1;
				}}
				onCli
				src={image1}
				alt=""
				ref={imageRef}
				className={className}
			/>
		);
	};
	return (
		<div>
			<div className="fixed top-0 left-0 h-screen w-screen z-20">
				<div className="w-[full] h-full flex justify-center items-center">
					<div className="border-2 border-black bg-slate-300 h-[98%] w-[98%] lg:h-[70%] lg:w-[70%] lg:aspect-video rounded-md overflow-clip">
						<div className="h-[90%] p-5 flex relative">
							<div className={"w-[20%] h-full flex flex-col gap-14 text-center font-nav"}>
								<div
									className="w-[10vh] h-[10vh] flex flex-col items-center "
									onClick={() => {
										setIsWorkFolder(!isWorkFolder);
										setIsProjectsFolder(false);
										//console.log(isWorkFolder);
									}}
								>
									<ImageHover
										image1={folder}
										image2={folderOpen}
										className={"w-full cursor-pointer "}
									/>

									<p>My ArtWorks</p>
								</div>
								<div
									className="w-[10vh] h-[10vh] flex flex-col items-center "
									onClick={() => {
										setIsProjectsFolder(!isProjectsFolder);
										setIsWorkFolder(false);
										//console.log(isWorkFolder);
									}}
								>
									<ImageHover
										image1={folder}
										image2={folderOpen}
										className={"w-full cursor-pointer "}
									/>

									<p>My Projects</p>
								</div>
								{/* <div className="w-[10vh] h-[10vh] flex flex-col items-center ">
                           <ImageHover
                              image1={mail}
                              image2={mailOpen}
                              className={"w-full cursor-pointer "}
                           />
                           <p>Contact Me</p>
                        </div> */}
							</div>
							<div
								className={`${
									isWorkFolder
										? "bg-white absolute lg:relative top-0 left-0 h-full w-full overflow-clip p-2 "
										: ""
								} rounded-md`}
							>
								{isWorkFolder && (
									<IFrame>
										<WorkFolder
											closeFn={() => {
												setIsWorkFolder(false);
											}}
										/>
									</IFrame>
								)}
								{isProjectsFolder && (
									<IFrame>
										<ProjectsFolder
											closeFn={() => {
												setIsWorkFolder(false);
											}}
										/>
									</IFrame>
								)}
							</div>
						</div>
						<div className="border-t-2 border-black bg-teal-500 w-full h-[10%] flex items-center pl-5">
							<img
								src={off}
								alt=""
								className="h-[80%] hover:h-[95%] cursor-pointer"
								onClick={() => {
									setIsClose(true);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyWork;
