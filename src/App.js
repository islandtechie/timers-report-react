import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


import Start from './pages/Start';
import logo from './assets/images/toastmasters-logo.jpg';


const App = () => {
  return (
    <Card style={{ textAlign: 'center', minHeight: 100 + 'vh'}}>
        <Card.Header style={{ backgroundColor: 'white'}}>
            <img src={logo} 
            width="110"
            className="d-inline-block align-top"
            alt="Toastmaster's International Logo" />
            <div>
                <h4>First Bahamas Branch Toastmaster's Club 1600</h4>
            </div>
        </Card.Header>
        <Card.Body>
            <Start />
        </Card.Body>
    </Card>
  )
};

export default App;
