import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { globalStyles } from "./MySelfStyles";
export const Controls = {
	forward: "forward",
	back: "back",
	left: "left",
	right: "right",
	jump: "jump",
};
const MenuControls = () => {
	const simulateKeyDown = (key) => {
		let code;
		if (key === "Space") {
			code = "Space";
		} else {
			code = `Key${key}`;
		}
		const event = new KeyboardEvent("keydown", {
			key,
			code,
			which: key.charCodeAt(0),
			keyCode: key.charCodeAt(0),
		});

		// Dispatch the event on the document
		document.dispatchEvent(event);
	};
	const keyCodes = () => {
		document.addEventListener("keydown", function (e) {
			// console.log(
			//    "keyCodeDEP",
			//    e.which,
			//    "key",
			//    e.key,
			//    "code",
			//    e.code,
			//    "location",
			//    e.location
			// );
		});
	};
	keyCodes();

	const simulateKeyUp = (key) => {
		let code;
		if (key === "Space") {
			code = "Space";
		} else {
			code = `Key${key}`;
		}
		const event = new KeyboardEvent("keyup", {
			key,
			code,
			which: key.charCodeAt(0),
			keyCode: key.charCodeAt(0),
		});

		// Dispatch the event on the document
		document.dispatchEvent(event);
	};

	// Function to handle button click and simulate keydown events
	const handleButtonMouseDown = (key) => () => {
		simulateKeyDown(key);
	};

	// Function to handle button release and simulate keyup events
	const handleButtonMouseUp = (key) => () => {
		simulateKeyUp(key);
	};

	return (
		<div className="xl:pointer-events-none">
			<style>{globalStyles}</style>
			<div className="relative controls z-10">
				<div className="flex w-full justify-between items-center">
					<div>
						<div className="flex">
							<div className="ctrl-button blank"></div>
							<button
								className="ctrl-button click"
								onPointerEnter={handleButtonMouseDown("W")}
								onPointerLeave={handleButtonMouseUp("W")}
							>
								<div className="pointer-events-none">W</div>
							</button>
							<div className="ctrl-button"></div>
						</div>
						<div className="flex">
							<button
								className="ctrl-button click"
								onPointerEnter={handleButtonMouseDown("A")}
								onPointerLeave={handleButtonMouseUp("A")}
							>
								<div className="pointer-events-none">A</div>
							</button>
							<button
								className="ctrl-button click"
								onPointerEnter={handleButtonMouseDown("S")}
								onPointerLeave={handleButtonMouseUp("S")}
							>
								<div className="pointer-events-none">S</div>
							</button>
							<button
								className="ctrl-button click"
								onPointerEnter={handleButtonMouseDown("D")}
								onPointerLeave={handleButtonMouseUp("D")}
							>
								<div className="pointer-events-none">D</div>
							</button>
						</div>
					</div>

					<button
						className="jump"
						onPointerEnter={handleButtonMouseDown("Space")}
						onPointerLeave={handleButtonMouseUp("Space")}
					>
						Jump
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuControls;
