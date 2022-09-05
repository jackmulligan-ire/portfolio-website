import ProjectButton from "./ProjectButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectEntry = ({ title, logoID, description, skills, buttonsInfo }) => {
  return (
    <>
      <h3 className="display-5 text-center">{title}</h3>
      <Card className="p-0 border-0">
        <div id={`${logoID}`} className="card-img">
          <img
            src={require(`../../assets/img/${logoID}.png`)}
            alt="CVTP logo"
          />
        </div>
        <Card.Body>
          <Row>
            <h5 className="text-center mt-2">{`${skills.join(" – ")}`}</h5>
          </Row>
          <Row>
            <p className="text-justify">{description}</p>
            {buttonsInfo.map((button) => (
              <Col xs="12" md="6" className="pr-md-">
                <ProjectButton kind={button.kind} buttonLink={button.url} />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProjectEntry;
