// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  // gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1", // old colours
  gradientColors: "#e50000, #ff8d00, #998F00, #028121, #004CFF, #770088",
  firstName: "Jack",
  middleName: "",
  lastName: "Mulligan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jackmulligan-ire",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jack-mulligan/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/my-photo.jpg"),
  imageSize: 350,
  message:
    "I’m a 2023 graduate from the MSc in Computer Science (Conv.) at University College Dublin having previously had a career in tech in marketing. I’m currently focused on web development but I’m also excited by all things data engineering, being a data nerd! I love to learn new languages and speak fluent German, having spent a few years living in Germany. I'm currently looking for full-time software engineering position in web development or data engineering!",
  resume:
    "https://docs.google.com/document/d/1AtWiN7oR3ujFBrPmc9Ln6ucEZIYBDURa/edit?usp=sharing",
};

// PROJECTS SECTION
const projects = {
  show: true,
  heading: "Projects",
  data: [
    {
      title: "Critics vs. The People",
      logoID: "cvtp-logo",
      description:
        "Compare the aggregate score given by viewers and reviewers for movies listed on the Open Movie Database. The app is designed to be engaging: Neon colours are presented against a pitch-black background and randomly-selected phrases accompany the landing page and load spinner. Built using Test-driven Development!",
      skills: ["React", "Bootstrap", "JavaScript", "Sass", "Jest"],
      buttonsInfo: [
        {
          kind: "readme",
          url: "https://github.com/jackmulligan-ire/critics-versus-people/",
        },
        {
          kind: "live",
          url: "https://jackmulligan-ire.github.io/critics-versus-people/",
        },
      ],
    },
    {
      title: "BusMe!",
      logoID: "bus-me-logo",
      description:
        "BusMe creates journey time predictions for Dublin Bus services by using machine learning models. It was vital to provide a convincing value proposition to user as Google Maps is the incumbent in the space. The focus was therefore placed on shipping features such as route visualisations and journey time analytics. BusMe was developed as part of a group project for the MSc Computer Science (Conv.) at University College Dublin.",
      skills: ["React", "Material UI", "TypeScript", "Django"],
      buttonsInfo: [
        {
          kind: "readme",
          url: "https://github.com/jackmulligan-ire/bus-me/",
        },
      ],
    },
    {
      title: "Altas",
      logoID: "altas-logo",
      description:
        "Altas is a Python package that was developed to gather data on a video sharing platform. The aim of the package is to enable the analysis of the data gathered and to allow this to be done for a large sample of creators. Analysis questions to be answered include identifying topics discussed by each creator, determining how these topics shifted over time, as well as co-occurrence of topics.",
      skills: [
        "Python",
        "Selenium",
        "Google Cloud Platform",
        "pandas",
        "Ubuntu",
      ],
      buttonsInfo: [
        {
          kind: "readme",
          url: "https://github.com/jackmulligan-ire/altas",
        },
      ],
    },
    {
      title: "PPR House",
      logoID: "ppr-house-logo",
      description:
        "PPR House is the Property Price Register (PPR) transformed to a data warehouse model after being retrieved at source via an EtLT pipeline. It aims to make analysing the PPR easier for analysts, while also being the basis to build out a future platform for building dashboards about the Irish property market.",
      skills: ["Python", "PostgreSQL", "AWS S3", "Docker", "plsql"],
      buttonsInfo: [
        {
          kind: "readme",
          url: "https://github.com/jackmulligan-ire/ppr-pipeline",
        },
      ],
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Let's Talk!",
  message:
    "I'm currently looking for full-time software engineering position in web development or data engineering! If you know of any positions available or just want to say hi, please feel free to email me at: ",
  email: "mulligja1@gmail.com",
};

export { navBar, mainBody, about, projects, skills, getInTouch };
