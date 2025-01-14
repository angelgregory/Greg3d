/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			fontFamily: {
				light: ["Inter"],
				bold: ["Inter"],
				nav: ["IBM Plex Mono"],
			},
			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "100%",
					},
				},
				blink: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "white",
					},
				},
			},
			animation: {
				typingLong: "typing 1s steps(20), blink .7s infinite",
				typingShort: "typing 0.5s steps(5), blink .7s infinite",
			},
		},
	},
	plugins: [flowbite.plugin()],
};
