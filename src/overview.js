import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Overview() {
   const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const list = data.map((item) => <div>{item}</div>);
  useEffect(() => {
    fetch("http://localhost:8000/getOverview")
      .then((res) => res.json())
      .then((json) => setdata(json))
      .catch((error) => console.error("Error fetching Overview data:", error));
  }, []);
  return (
    <div>
      <Row>
        <Col xs={1}></Col>
        <Col xs={4}>
           <div style={{padding:20, margin:10 , textAlign:"justify"}}>
              <h3>Hi, I am Tanisha Lad</h3>
              <p class="animated-text">{list}</p>
           </div >
           <div style={{padding:20, margin:5 , textAlign:"justify"}}>
           <Button variant="info" size="lg" active onClick={() => {navigate('/contact')}}>
            Contact Me Here
           </Button>
           </div>
        </Col>
        <Col xs={1}></Col>
        <Col xs={4}>
        <div>
          <Image
            src={require("./greetings.jpg")}
            alt="greeting"
            width={500}
            height={500}
          />
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </div>
  );
}
