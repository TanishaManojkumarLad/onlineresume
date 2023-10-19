import './App.css';
import Overview from './overview';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Certificate from './certificate';
import Detail from './detail';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  return (
    <div className="App">
      <div style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', padding:10, margin:5 }}>
        Welcome to my online resume, showcasing my expertise, experience, and passion in the field of Computer Programming and Analysis. 
        <br></br>
        Click to view any Information!!
        </div>
     
      
      <div style={{padding: 10, margin:5}}>
      <Container>
      <Row>
        <Col>  <Display name='Personal Information' item={<Detail/>}/>  </Col>
        <Col>   <Display name='Overview' item={<Overview/>}/></Col>
      </Row>
      <Row>
        <Col>  <Display name='Education' item={<Education/>}/> </Col>
        <Col>  <Display name='Skills' item={<Skill/>}/></Col>
      </Row>
      <Row>
        <Col>  <Display name='Experience' item={<Experience/>}/> </Col>
        <Col>    <Display name='Certificate' item={<Certificate/>}/></Col>
      </Row>
      </Container>
    </div>
    </div>
  );
}


function Display(props) {
  const [open, setOpen] = useState(false);
  return (
   <div>
      <Button
        variant="outline-primary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{ padding: 10, margin: 5 }}
      >
        {props.name}
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card bg='dark'
              key='Dark'
              text={'dark' === 'light' ? 'dark' : 'white'}
              className="mb-2" border="primary" body style={{ width: '500px' }}>
              <Card.Header>{props.name}</Card.Header>
              <Card.Body>
                <div>
                  {props.item}
                </div>
              </Card.Body>
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
