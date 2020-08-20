import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
class Navbar extends Component {
  state = {};

  componentDidMount() {
    window.onscroll = this.myFunction;
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  myFunction() {
    var element = document.getElementById("nav-bar");
    var desiredPosition = 100;
    if (window.pageYOffset > desiredPosition) {
      element.style.cssText +=
        "position: fixed; left: 70em; top: 50%; background-color: cornsilk; transform: rotateZ(90deg); width: 400px; padding: 16px 0px 0px 10px;";
    } else if (window.pageYOffset === 0) {
      element.style.cssText +=
        "position: initial; left: 60em; top: 6em; background-color: transparent; transform: rotateZ(0deg);";
    }
  }
  render() {
    return (
      <div className="header">
        <p className="logo">
          <Fade bottom cascade>
            {/* {data.name} */}
            <img src={require("../images/logo.png")} alt={data.name} />
          </Fade>
        </p>
        <nav id="nav-bar">
          <ul>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="homw"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
