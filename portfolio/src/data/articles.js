import React from "react";
import "./styles.css"; // Adjust path as necessary

function article_1() {
  return {
    date: "Started 6th-January-2021 Will Be Ended 6th-January-2025",
    title: "ACCP (APTECH CERTIFIED COMPUTER PROFESSIONAL)",
    description: "Aptech North Nazimabad karachi",
    keywords: [
      "HTML5/CSS 3/JavaScript",
      "PHP Web Application Developer",
      "ASP.NET Developer",
      ".NET Web & Enterprise Application Developer",
    ],
    body: (
      <React.Fragment>
        <div className="education-section">
          <h2 className="section-heading">Education & Certifications</h2>
          <div className="paragraph">
            <strong>CERTIFIED</strong>
          </div>
          <div className="paragraph">
            <strong>HTML5/CSS 3/JavaScript</strong>
          </div>
          <div className="paragraph">
            <strong>PHP Web Application Developer</strong>
          </div>
          <div className="paragraph">
            <strong>ASP.NET Developer</strong>
          </div>
          <div className="paragraph">
            <strong>.NET Web & Enterprise Application Developer</strong>
          </div>
          <div className="paragraph">
            <strong>Cross Platform App Developer</strong>
          </div>
          <div className="paragraph">
            Aptech North Nazimabad, Karachi, Pakistan
          </div>
          <h2 className="section-heading">Certifications</h2>
		  <div className="paragraph">
		  ACCP (APTECH CERTIFIED COMPUTER PROFESSIONAL)
          </div>
          <img
            src=""
            alt="Certifications"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "Started 6th-March-2022 Will Be Ended 23th-July-2024",
    title: "FLUTTER MOBILE APPLICATION DEVELOPMENT",
    description:
      "Saylani Mass IT Training",
	  keywords: [
		"HTML5/CSS 3/JavaScript",
		"PHP Web Application Developer",
		"ASP.NET Developer",
		".NET Web & Enterprise Application Developer",
	  ],
    body: (
		<React.Fragment>
        <div className="education-section">
          <h2 className="section-heading">Education & Certifications</h2>
          <div className="paragraph">
            <strong>SOFTWARE SKILLS:</strong>
          </div>
          <div className="paragraph">
            <strong>Programming Languages: Dart</strong>
          </div>
          <div className="paragraph">
            <strong>Frameworks: Flutter</strong>
          </div>
          <div className="paragraph">
            <strong>UI/UX Design: Material Design, Cupertino,
			Responsive Design</strong>
          </div>
          <div className="paragraph">
            <strong>Database: Firebase, SQLite</strong>
          </div>
          <div className="paragraph">
            <strong>Version Control: Git, GitHub</strong>
          </div>
		  <div className="paragraph">
            <strong>Problem Solving: Analytical thinking,</strong>
          </div>
		  <div className="paragraph">
            <strong>State Management: stacked, Riverpod, Bloc,
			GetX</strong>
          </div>
          <div className="paragraph">
		  SMIT, Karachi, Pakistan
          </div>
          <h2 className="section-heading">Certifications</h2>
		  <div className="paragraph">
		  Flutter Application Developer
          </div>
          <img
            src=""
            alt="Certifications"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_1, article_2];

export default myArticles;
