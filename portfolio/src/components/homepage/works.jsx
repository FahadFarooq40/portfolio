import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Social Media Acccont"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./github.png"
								alt="github"
								className="work-image"
							/>
							<div className="work-title">Github</div>
							<div className="work-subtitle">
								Follow Me Github
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./linkndin.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">linkndin</div>
							<div className="work-subtitle">
							Connect with me on LinkedIn
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
