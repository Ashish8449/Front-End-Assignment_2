import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Right from "./components/Right";
function App() {
  return (
    <>
      <NavBar />

      {/* <img src="/images/Articles.png"  alt="" /> */}
      <BrowserRouter>
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              {/* left side  */}
              <Routes>
              
                <Route exact path="/" element={<Articles />} />
                <Route exact path="/articles/:id" element={<Article />} />
              </Routes>
            </Col>
            <Col sm={12} lg={4}>
              <Right />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
