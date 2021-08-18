import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="all">
        <a
          href="https://www.twitch.tv/bergannation/about"
          target="_blank"
          className="lefter"
        >
          <div className="text">Twitch</div>
        </a>
        <a
          href="https://twitter.com/Coach_TBrown20"
          target="_blank"
          className="left"
        >
          <div className="text">Twitter</div>
        </a>
        <a
          href="https://github.com/bergannation"
          target="_blank"
          className="center"
        >
          <div className="explainer">
            <span>Hover Me</span>
          </div>
          <div className="text">GitHub</div>
        </a>
        <a
          href="https://www.linkedin.com/in/travis-brown-97478a154/"
          target="_blank"
          className="right"
        >
          <div className="text">LinkedIn</div>
        </a>
        <a href="" target="_blank" className="righter">
          <div className="text">Resume</div>
        </a>
      </div>
    </section>
  );
}
