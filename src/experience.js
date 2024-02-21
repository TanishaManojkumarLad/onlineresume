import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Experience() {
   const [data, setdata] = useState([]); 
   const list = data.map((item, index) => 
   <div class="item-list" key={index}>
   <Card style={{ width: '25rem' }}>
   <Card.Img variant="top" src={require(`${item[0]}`)} alt="image" />
   <Card.Body>
     <Card.Title>{item[1]}</Card.Title>
     <Card.Text>
       {item[2]}
     </Card.Text>
     <Button variant="info" size="lg" active onClick={() => {window.open(`${item[3]}`)}}>Github</Button>
   </Card.Body>
   </Card>
   </div>
   );
   useEffect(() => {
       fetch("http://localhost:8000/getExp")
       .then(res => res.json())
       .then(json => setdata(json))
       .catch((error) => console.error("Error fetching Overview data:", error))
   }, []);
   return (
     <div>
         <h3  style={{padding:20, margin:10 , textAlign:"justify"}}>Projects:</h3>
    <div class ="container-list">  
    {list}</div>
     </div>

);
};