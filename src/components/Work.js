import React, { Component } from "react";
import Project from "./Project";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Work extends Component {
  state = {};
  render() {
    return (
      <>
        <h1 className="heading">
          <Fade bottom cascade>
            Work.
          </Fade>
        </h1>
        <div className="work-content">
          {data.projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
          ))}
        </div>
        <p className="text-center mt-5">
          Check my other work on{" "}
          <a
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            ref={(node) => {
              if (node) {
                node.style.setProperty("color", "#7f5dd0", "important");
              }
            }}
            href="https://github.com/prak-mtl?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </>
    );
  }
}

export default Work;
