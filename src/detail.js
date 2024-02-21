import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Detail() {
  const [data, setdata] = useState([]);
  const list = data.map((item) => <div>{item}</div>);
  useEffect(() => {
    fetch("http://localhost:8000/getdetails")
      .then((res) => res.json())
      .then((json) => setdata(json))
      .catch((error) => console.error("Error fetching Overview data:", error));
  }, []);
  return (
    <div>
      <Row>
        <Col xs={1}></Col>
        <Col xs={5}>
          <Image
            src={require("./contact.gif")}
            alt="contact-image"
            width={500}
            height={500}
          />
        </Col>
        <Col xs={6}>
          <div style={{ padding: 10, margin: 10, textAlign: "justify" }}>
          <h4>Thank you again for visiting my website!!!</h4>
          </div>
          
          <div style={{ padding: 10, margin: 10, textAlign: "justify" }}>
            <h5>
              You can contact me through my email or connect with me through my
              Linkedin
            </h5>
            <h6>{list}</h6>
          </div>
          <div style={{ padding: 10, margin: 5, textAlign: "justify" }}>
            <Button
              variant="info"
              size="lg"
              active
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/tanisha-lad-0a8baa287/"
                );
              }}
            >
              {" "}
              Linkedin
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
