import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectEntry from "./ProjectEntry";

const Project = ({ heading, projects }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row className="justify-content-center">
          {projects.map((project) => (
            <Row className="mb-4 mb-lg-5 card-row">
              <ProjectEntry
                title={project.title}
                logoID={project.logoID}
                description={project.description}
                skills={project.skills}
                buttonsInfo={project.buttonsInfo}
              />
            </Row>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
