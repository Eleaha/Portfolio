
import { useEffect, useState } from "react";
import { slideShowProps } from "../interfaces";

export function Slideshow({ images, delay, text = [] }: slideShowProps) {
	const [imgIndex, setImgIndex] = useState(0);
	const [textIndex, setTextIndex] = useState(text!.length - 1);

	useEffect(() => {
		setTimeout(() => {
			setImgIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
			setTextIndex((prevIndex) =>
				prevIndex === 0 ? text.length - 1 : prevIndex - 1
			);
		}, delay);
		return () => {};
	}, [imgIndex]);

	return (
		<div className="slideshow">
			<div className="slideshow-frame">
				<div
					className="slides"
					style={{ transform: `translate3d(${-imgIndex * 100}%, 0, 0)` }}
				>
					{images.map((src, index) => (
						<img className="slide" key={index} src={src}></img>
					))}
				</div>
			</div>
			<div className="slide-text-frame">
				<div
					className="slide-texts"
					style={{ transform: `translate3d(${-textIndex * 100}%, 0, 0)` }}
				>
					{text.map((string, index) => (
						<h2 className="slide-text" key={index}>
							{string}
						</h2>
					))}
				</div>
			</div>
		</div>
	);
}
