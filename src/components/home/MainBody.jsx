import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const technologyStrings = [
      "React",
      "TypeScript",
      "JavaScript",
      "Web",
      "Frontend",
    ];

    const getDelayValue = () => {
      const randomNumber = Math.floor(Math.random() * 10);
      return randomNumber < 3 ? 50 : randomNumber < 6 ? 100 : 150;
    };
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(185deg,${gradient})`,
          backgroundSize: "600% 600%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <div className="d-flex justify-content-center flex-row-reverse">
            <div className="lead typist mx-1">Developer</div>
            <Typist backspaceDelay={90} typingDelay={getDelayValue}>
              {technologyStrings.map((string) => (
                <>
                  <Typist.Delay ms={750} />
                  <div className="lead typist mx-1">{string}</div>
                  <Typist.Delay ms={2000} />
                  <Typist.Backspace count={string.length} />
                </>
              ))}
              <Typist.Delay ms={750} />
              <div className="lead typist mx-1">Software</div>
            </Typist>
          </div>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
