import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

export default function Header() {
  return (
    <>
      <h1 className="heading-background">CREATIVE</h1>
      <Fade bottom>
        <p className="header-title">
          {data.headerTagline[0]}
          <br></br>
          {data.headerTagline[1]}
          <span className="header-title-mid">{data.headerTagline[2]}</span>
          {data.headerTagline[3]}
          <br></br>
          {data.headerTagline[4]}
          <br></br>
          {data.headerTagline[5]}
          <br></br>
          <div className="header-links">
            <button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
            <button>
              <a
                href="https://gitconnected.com/prak-mtl/resume"
                target="_blank"
                rel="noreferrer noopener"
              >
                My Resume
              </a>
            </button>
          </div>
        </p>
      </Fade>
    </>
  );
}
