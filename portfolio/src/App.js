import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutus";
import Projects from "./pages/projects";
import Education from "./pages/education";
import ReadEducation from "./pages/readEducation";
import Contactus from "./pages/contactus";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/education" element={<Education />} />
				<Route path="/education/:slug" element={<ReadEducation />} />
				<Route path="/contactus" element={<Contactus />} />
			</Routes>
		</div>
	);
}

export default App;
