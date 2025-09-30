import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar brandName="Book-World" />
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
