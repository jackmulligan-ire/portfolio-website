const ProjectButton = ({ kind, buttonLink }) => {
  const buttonText = kind === "live" ? "View Live" : "Learn More on GitHub";
  const buttonClass = kind === "live" ? "btn-success" : "btn-info";

  return (
    <a
      className={`btn ${buttonClass} mb-2 py-2 w-100`}
      href={buttonLink}
      role="button"
      target="_blank"
      rel="noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default ProjectButton;
