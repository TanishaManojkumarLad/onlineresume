import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function Skill() {
  const [data, setdata] = useState([]);
  const list = data.map((item) => (
    <div class="list">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require(`${item[0]}`)} alt="image" />
        <Card.Body>
          <Card.Title>{item[1]}</Card.Title>
          </Card.Body>
      </Card>
    </div>
  ));


  useEffect(() => {
    fetch("http://localhost:8000/getSkill")
      .then((res) => res.json())
      .then((json) => setdata(json))
      .catch((error) => console.error("Error fetching Overview data:", error));
  }, []);


  return <div>
     <h3  style={{padding:20, margin:10 , textAlign:"justify"}}>Programming Language and Technologies:</h3>
    <div class="container">
    {list}</div>
    </div>;
}
