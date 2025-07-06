import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid="sm">
        <Navbar.Brand href="#home">Joshua Hollander</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link xl={2} href="#workExperience">
            Work Experience
          </Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#technicalKnowledge">Technical Knowledge</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link
            target="_blank"
            type="application/pdf"
            href="./assets/Resume.pdf"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            href="https://github.com/stucco11"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/joshua-hollander/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link href="mailto:stuccoeleven@gmail.com">Email</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
