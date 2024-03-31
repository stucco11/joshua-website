import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
import "../../style.css";

const TechnicalKnowledge = ({ data }) => {
  return (
    <section>
      <h2>Technical Knowledge</h2>
      <Row className="justify-content-md-space-between">
      {data.map((data) => (
        <Col sm={6} md={4} lg={3}>
        <Card key={data.category} style={{ width: '100%' }}>
          <Card.Header>
            <Container className="max-container-width">
              <Row className="condensed">
                <Col>
                  <p>
                    <strong>{data.category}</strong>
                  </p>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <ListGroup variant="flush">
            {data["skills"].map((item) => (
              <ListGroup.Item key={item}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        </Col>
      ))}
        
      </Row>
    </section>
  );
};

export default TechnicalKnowledge;
