import ProjectButton from "./ProjectButton";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const ProjectEntry = ({ title, logoID, description, skills, buttonsInfo }) => {
  return (
    <>
      <h3 className="display-5 text-center">{title}</h3>
      <Card className="p-0 border-0">
        <div id={`${logoID}`} className="card-img">
          <img
            className="w-100"
            src={require(`../../assets/img/${logoID}.png`)}
            alt="CVTP logo"
          />
        </div>
        <Card.Body>
          <Row>
            <h5 className="text-center mt-2">{`${skills.join(" – ")}`}</h5>
          </Row>
          <Row>
            <p className="text-justify p-0">{description}</p>
            {buttonsInfo.map((button) => (
              <ProjectButton kind={button.kind} buttonLink={button.url} />
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectEntry;
