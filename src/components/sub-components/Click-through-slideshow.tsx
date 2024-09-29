import { useState } from "react";

export function ClickThroughSlideshow({ images }: { images: string[] }) {
	const [imgIndex, setImgIndex] = useState(0);

	function handleSlideArrowClick(e: any) {
		setImgIndex((current: number) => {
			const newIndex =
				e.target.className === "slide-arrow left-slide-arrow"
					? current - 1
					: current + 1;
			if (newIndex < 0) {
				return images.length - 1;
			} else if (newIndex > images.length - 1) {
				return 0;
			}
			return newIndex;
		});
		return null;
	}

	return (
		<section className="click-slideshow">
			<div className="project slideshow">
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
			<div className="slide-nav">
				<div
					className="slide-arrow left-slide-arrow"
					onClick={handleSlideArrowClick}
				>
					{images.length > 1 ? "<" : null}
				</div>
				<div className="slide-dots">
					{images.map((_, index) => {
						return (
							<div
								key={index}
								className={`slide-dot${imgIndex === index ? " active" : ""}`}
								onClick={() => setImgIndex(index)}
							></div>
						);
					})}
				</div>
				<div
					className="slide-arrow right-slide-arrow"
					onClick={handleSlideArrowClick}
				>
					{images.length > 1 ? ">" : null}
				</div>
			</div>
		</section>
	);
}
