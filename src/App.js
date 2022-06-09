import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          Left
        </Col>
        <Col md="auto">MID</Col>
        <Col xs lg="2">
          Right
        </Col>
      </Row>
    </Container>
  );
}

export default App;
