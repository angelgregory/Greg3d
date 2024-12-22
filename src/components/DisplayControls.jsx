import React from "react";
import { globalStyles } from "./MySelfStyles";

const DisplayControls = () => {
	return (
		<div className="xl:pointer-events-none">
			<style>{globalStyles}</style>

			<div className="relative controls z-10 flex flex-col justify-center pl-10">
				<div className="w-full justify-between items-center scale-50 origin-left">
					<div>
						<div className="flex">
							<div className="ctrl-button blank"></div>
							<button className="ctrl-button click">W</button>
							<div className="ctrl-button"></div>
						</div>
						<div className="flex">
							<button className="ctrl-button click">A</button>
							<button className="ctrl-button click">S</button>
							<button className="ctrl-button click">D</button>
						</div>
					</div>
					<button className="jump2">Jump (Space)</button>{" "}
					<div className="font-bold text-gray-400 text-2xl pl-16">CONTROLS</div>
				</div>
			</div>
		</div>
	);
};

export default DisplayControls;
