import { useEffect, useState } from "react";

export function SlideshowScrollingCaption({
	text,
	delay,
}: {
	text: string[];
	delay: number;
}) {
	const [textIndex, setTextIndex] = useState(text!.length - 1);

	useEffect(() => {
		setTimeout(() => {
			setTextIndex((prevIndex) =>
				prevIndex === 0 ? text.length - 1 : prevIndex - 1
			);
		}, delay);
		return () => {};
	}, [textIndex]);

	return (
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
	);
}
