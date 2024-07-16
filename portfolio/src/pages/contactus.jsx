import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/Contactus.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />

        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <h1 className="title contact-title">
              Let's Get in Touch
            </h1>

            <div className="subtitle contact-subtitle">
              Thank you for your interest! Feel free to reach out to me via email
              or social media. I strive to respond promptly and look forward to
              connecting with you.
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="method-details">
                  <div className="method-title">Email</div>
                  <div className="method-description">
                    Send me an email at{" "}
                    <a href={`mailto:${INFO.main.email}`}>
                      {INFO.main.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="method-details">
                  <div className="method-title">Instagram</div>
                  <div className="method-description">
                    Connect with me on{" "}
                    <a
                      href={INFO.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>{" "}
                    for updates and more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
