import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Header extends Component {
  state = {};

  render() {
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
            <button>
              <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
                Contact
              </a>
            </button>
          </p>
        </Fade>
      </>
    );
  }
}

export default Header;
