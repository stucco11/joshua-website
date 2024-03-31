import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../style.css";

const Education = ({ data }) => {
  return (
    <section>
      <h2>Education</h2>
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
                    <strong>{data.title}</strong>
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
            {data["degrees"].map((item) => (
              <ListGroup.Item key={item}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </section>
  );
};

export default Education;
