import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Certificate from "./certificate";

export default function Education() {
  const [data, setdata] = useState([]);
  const list = data.map((item) => <div>{item}</div>);
  useEffect(() => {
    fetch("http://localhost:8000/getEdu")
      .then((res) => res.json())
      .then((json) => setdata(json))
      .catch((error) => console.error("Error fetching Overview data:", error));
  }, []);
  return (
    <div >
      <div style={{ padding: 20, margin: 5, textAlign: "justify" }} class="animated-div-education">
        <Row>
          <Col xs={1}></Col>
          <Col xs={7}>
            <h3>Education </h3>
            <p>{list}</p>
          </Col>
          <Col xs={4}>
            <div>
              <Image
                src={require("./college.jpg")}
                alt="college image"
                width={300}
                height={200}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 20, margin: 5, textAlign: "justify" }} class="animated-div-certification">
        <Row>
          <Col xs={1}></Col>
          <Col xs={4}>
            <div>
              <Image
                src={require("./certification.jpg")}
                alt="certificate image"
                width={300}
                height={200}
              />
            </div>
          </Col>
          <Col xs={7}>
            <h3>Certificates </h3>
            <p><Certificate/></p>
            <div style={{padding:20, margin:5 , textAlign:"justify"}}>
           <Button variant="info" size="lg" active  onClick={() => {window.open('https://www.freecodecamp.org/certification/TanishaLad/javascript-algorithms-and-data-structures')}}>
            Check Certificate Projects
           </Button>
           </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
