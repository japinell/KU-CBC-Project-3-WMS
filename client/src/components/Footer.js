import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="all">
        <a href="#" target="_blank" className="lefter">
          <div className="text">Link Here</div>
        </a>
        <a href="#" target="_blank" className="left">
          <div className="text">Link Here</div>
        </a>
        <a href="#" target="_blank" className="center">
          <div className="explainer">
            <span>Hover Me</span>
          </div>
          <div className="text">GitHub</div>
        </a>
        <a href="#" target="_blank" className="right">
          <div className="text">Link Here</div>
        </a>
        <a href="" target="_blank" className="righter">
          <div className="text">Link Here</div>
        </a>
      </div>
    </section>
  );
}
