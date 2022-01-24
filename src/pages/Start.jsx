import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Start = () => {
    let navigate = useNavigate();

  return ( 
    <Fragment>   
        <Card.Title>
            <h2>Timer's Report Generator</h2>
        </Card.Title>
        <Card.Text>
            This Application creates timer's for speakers and then generates a complete timer's report. 
        </Card.Text>
        
        <Button variant="success" size='lg'  onClick={() => navigate("/sessioninformation")}>Enter Session Information</Button>
    </Fragment>
  )};

export default Start;
