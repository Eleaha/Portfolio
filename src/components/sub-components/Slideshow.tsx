import { useEffect, useState } from "react";
import { slideShowProps } from "../../interfaces";

export function Slideshow({ images, delay }: slideShowProps) {
	const [imgIndex, setImgIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setImgIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
		</div>
	);
}
