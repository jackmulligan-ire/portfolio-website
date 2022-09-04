import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectEntry from "./ProjectEntry";

const Project = ({ heading, projects }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.map((project) => (
            <ProjectEntry
              title={project.title}
              logoURL={project.logoURL}
              description={project.description}
              skills={project.skills}
              buttonsInfo={project.buttonsInfo}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
