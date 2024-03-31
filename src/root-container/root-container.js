import Education from "./education/education";
import NavBar from "./nav-bar/nav-bar";
import TechnicalKnowledge from "./technical-knowledge/technical-knowledge";
import WorkExperience from "./work-experience/work-experience";
import { Container } from "react-bootstrap";
import "../style.css";

export default function RootContainer() {
  let data = require("../json/data.json");
  return (
    <section>
      <div className="sticky-top">
        <NavBar />
      </div>
      <Container className="increase-padding-sm">
        <div id="home">
          <h1 className="center">Joshua Hollander</h1>
          <h2>Software Engineer</h2>
        </div>
        <hr />
        <div id="workExperience">
          <WorkExperience data={data["work-experience"]} />
        </div>
        <div id="education">
          <Education data={data["education"]} />
        </div>
        <div id="technicalKnowledge">
          <TechnicalKnowledge data={data["technical-knowledge"]} />
        </div>
      </Container>
    </section>
  );
}
