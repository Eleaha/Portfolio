import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { About } from "./components/main-pages/About";
import { Projects } from "./components/main-pages/Projects";
import { CV } from "./components/main-pages/CV";
import { Contact } from "./components/main-pages/Contact";
import { Header } from "./components/Header";
import "./App.css";

function App() {
	const [activePage, setActivePage] = useState("about");

	return (
		<main>
			<Header activePage={activePage} />
			<Routes>
				<Route path="/" element={<About setActivePage={setActivePage} />} />
				<Route
					path="/projects"
					element={<Projects setActivePage={setActivePage} />}
				/>
				<Route path="/CV" element={<CV setActivePage={setActivePage} />} />
				<Route
					path="/contact"
					element={<Contact setActivePage={setActivePage} />}
				/>
			</Routes>
			<Footer />
			<div className={`background ${activePage}-bg`}></div>
		</main>
	);
}

export default App;
