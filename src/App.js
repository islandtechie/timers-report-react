import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import logo from './assets/images/toastmasters-logo.jpg';


const App = () => {
  const [speakers, setSpeakers] = useState([{}]);
  const [evaluators, setEvaluators] = useState([{}]);
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
            <Outlet context={[speakers, setSpeakers], [evaluators, setEvaluators]} />
        </Card.Body>
    </Card>
  )
};

export default App;
