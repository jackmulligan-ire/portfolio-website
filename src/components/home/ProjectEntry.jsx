import ProjectButton from "./ProjectButton";

const ProjectEntry = ({ title, logoURL, description, buttonsInfo }) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={require(`../../assets/img/${logoURL}.png`)} alt="CVTP logo" />
      <p>{description}</p>
      {buttonsInfo.map((button) => (
        <ProjectButton kind={button.kind} buttonLink={button.url} />
      ))}
    </>
  );
};

export default ProjectEntry;
