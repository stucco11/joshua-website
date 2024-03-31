import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../style.css";

const WorkExperience = ({ data }) => {
  return (
    <section>
      <h2>Work Experience</h2>
      {data.map((data) => (
        <Card key={data.title}>
          <Card.Header>
            <Container className="max-container-width">
              <Row className="condensed">
                <Col className="parent-img" sm="auto">
                  <img
                    src={"assets/" + data.image}
                    alt={data.title + " logo"}
                  />
                </Col>
                <Col>
                  <p>
                    <strong>{data.title}</strong> - {data.position}
                  </p>
                </Col>
                <Col sm="auto">
                  <p>
                    {data.startDate == null
                      ? ""
                      : data.startDate +
                        " - " +
                        (data.endDate == null ? "Current" : data.endDate)}
                  </p>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <ListGroup variant="flush">
            {data["duties"].map((item) => (
              <ListGroup.Item key={item}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </section>
  );
};

export default WorkExperience;
