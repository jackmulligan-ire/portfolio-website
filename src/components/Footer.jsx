import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="pt-3 text-center ">
      <Container id="contact">
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noreferrer"
          href="https://github.com/jackmulligan-ire"
          aria-label="My GitHub"
          target="_blank"
        >
          {" "}
          <span className="badge bg-dark">{props.name}</span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Theme by{" "}
            <a
              href="https://github.com/hashirshoaeb"
              rel="noreferrer"
              target="_blank"
            >
              hashirshoaeb
            </a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
