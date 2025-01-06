import React, { useState, useEffect } from "react";

const getImageOrientation = (src, callback) => {
	const img = new Image();
	img.src = src;
	img.onload = () => {
		callback(img.width > img.height ? "horizontal" : "vertical");
	};
};

export const generateImageList = (images, classNames = {}) => {
	return Object.values(images).map((image, index) => {
		const [orientation, setOrientation] = useState("");

		useEffect(() => {
			getImageOrientation(image.default, setOrientation);
		}, [image]);

		const baseClass =
			"bg-no-repeat transition ease-in-out duration-700 transform hover:scale-110 cursor-pointer";
		const orientationClass = orientation === "horizontal" ? classNames.horizontal || "" : classNames.vertical || "";

		return (
			<img
				key={index}
				src={image.default}
				alt={`Image ${index + 1}`}
				className={`${baseClass} ${orientationClass}`}
			/>
		);
	});
};
