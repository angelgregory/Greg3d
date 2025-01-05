import React from "react";
// import { style } from "./MyWorksStyles";
import iframe from "./iframe.css?inline";
import arayat from "../assets/images/works/arayat.png";
import coffee from "../assets/images/works/coffee.png";
import naga from "../assets/images/works/naga.png";
import phgo from "../assets/images/works/phgo.png";
import StudyGo from "../assets/images/works/StudyGo.png";
import irony from "../assets/images/works/THE-IRONY.png";
import trabahero from "../assets/images/works/trabahero.png";
import lipatpat from "../assets/images/works/lipatpat-white.png";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Project } from "./Project";

const ProjectsFolder = ({ closeFn }) => {
	return (
		<div className="">
			<style>{iframe}</style>
			{/* <style>{style}</style> */}
			<div className="bg-white flex flex-col">
				<div
					className="fixed z-10 bg-white rounded-full w-16 text-4xl flex justify-center m-4 cursor-pointer shadow-2xl"
					onClick={closeFn}
				>
					<IoReturnDownBackOutline className=" text-slate-800" />
				</div>
				<div>
					<Project />
				</div>
			</div>
		</div>
	);
};

export default ProjectsFolder;
