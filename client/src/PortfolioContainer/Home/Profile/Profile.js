import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details=">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.linkedin.com/in/sathya-sreekar-dinavahi-6939781a9/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://github.com/sathyasreekar2304">
              <i class="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/sathya_sreekar/tagged/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://twitter.com/sathya_sreekar">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sreekar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    2000,
                    "Full stack Developer 💻",
                    2000,
                    "Mern stack Dev 📱",
                    2000,
                    "Aspiring Data Engineer 🔴",
                    2000,
                    "React/Flutter 🌐",
                    2000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Aspiring Software Engineer with Strong Knowledge in Cloud.
            </span>
            <span className="profile-role-tagline">
              (AWS Certified Cloud Practioner)
            </span>
          </div>

          <div className="profile-options">
            <a href="sathya sreekar.pdf" download="sathya sreekar.pdf">
              <button className="btn primary-btn">Contact Me</button>
            </a>
            <a href="sathya sreekar.pdf" download="sathya sreekar.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
