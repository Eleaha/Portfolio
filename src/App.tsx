import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { About } from "./components/main-pages/About";
import { Projects } from "./components/main-pages/Projects";
import { CV } from "./components/main-pages/CV";
import { Contact } from "./components/main-pages/Contact";
import "./App.css";
import { Header } from "./components/Header";

function App() {
	return (
		<main>
			<Header />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/CV" element={<CV />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
