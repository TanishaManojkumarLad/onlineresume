import './App.css';
import Overview from './overview';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Detail from './detail';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href={"/"}><Image src={require("./e502e56eb1e31dd0caa1f963fb6f5503.jpg")} alt="logo"  width={40} height={40}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={"/"}>About Me</Nav.Link>
            <Nav.Link href={"/education"}>Education</Nav.Link>
            <Nav.Link href={"/skill"}>Skills</Nav.Link>
            <Nav.Link href={"/project"}>Projects</Nav.Link>
            <Nav.Link href={"/contact"}>Contact Me</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/project" element={<Experience/>} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/contact" element={<Detail/>} />
      </Routes>
    </div>
  );
}



export default App;
