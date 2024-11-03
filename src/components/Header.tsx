import { Link } from "react-router-dom";

export function Header({ activePage }: any) {
	return (
		<header
			id="header"
			style={{
				backgroundImage: `linear-gradient(var(--${activePage}) 40%, rgba(255,0,0,0))`,
			}}
		>
			<Link to="/">
				<h2 id="header-name">Ellie Harrington</h2>
			</Link>
			<div id="social-icon-wrapper">
				<a href="mailto:ellieharringtion8@gmail.com" target="_blank">
					<img
						className="header-icon"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="
					></img>
				</a>
				<a href="https://github.com/Eleaha" target="_blank">
					<img
						className="header-icon"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwdjI0aDI0di0yNGgtMjR6bTE0LjUzNCAxOS41OWMtLjQwNi4wNzgtLjUzNC0uMTcxLS41MzQtLjM4NHYtMi4xOTVjMC0uNzQ3LS4yNjItMS4yMzMtLjU1LTEuNDgxIDEuNzgyLS4xOTggMy42NTQtLjg3NSAzLjY1NC0zLjk0NyAwLS44NzQtLjMxMS0xLjU4OC0uODI0LTIuMTQ3LjA4My0uMjAyLjM1Ny0xLjAxNi0uMDc5LTIuMTE3IDAgMC0uNjcxLS4yMTUtMi4xOTguODItLjYzOS0uMTgtMS4zMjMtLjI2Ny0yLjAwMy0uMjcxLS42OC4wMDMtMS4zNjQuMDkxLTIuMDAzLjI2OS0xLjUyOC0xLjAzNS0yLjItLjgyLTIuMi0uODItLjQzNCAxLjEwMi0uMTYgMS45MTUtLjA3NyAyLjExOC0uNTEyLjU2LS44MjQgMS4yNzMtLjgyNCAyLjE0NyAwIDMuMDY0IDEuODY3IDMuNzUxIDMuNjQ1IDMuOTU0LS4yMjkuMi0uNDM2LjU1Mi0uNTA4IDEuMDctLjQ1Ny4yMDQtMS42MTQuNTU3LTIuMzI4LS42NjYgMCAwLS40MjMtLjc2OC0xLjIyNy0uODI1IDAgMC0uNzgtLjAxLS4wNTUuNDg3IDAgMCAuNTI1LjI0Ni44ODkgMS4xNyAwIDAgLjQ2MyAxLjQyOCAyLjY4OC45NDR2MS40ODljMCAuMjExLS4xMjkuNDU5LS41MjguMzg1LTMuMTgtMS4wNTctNS40NzItNC4wNTYtNS40NzItNy41OSAwLTQuNDE5IDMuNTgyLTggOC04czggMy41ODEgOCA4YzAgMy41MzMtMi4yODkgNi41MzEtNS40NjYgNy41OXoiLz48L3N2Zz4="
					></img>
				</a>
				<a
					href="https://www.linkedin.com/in/ellie-harrington-software-developer/"
					target="_blank"
				>
					<img
						className="header-icon"
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwdjI0aDI0di0yNGgtMjR6bTggMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTctMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
					></img>
				</a>
			</div>
		</header>
	);
}
