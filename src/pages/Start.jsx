import React, { Fragment } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Start = () => {
  return ( 
    <Fragment>   
        <Card.Title>
            <h2>Timer's Report Generator</h2>
        </Card.Title>
        <Card.Text>
            This Application creates timer's for speakers and then generates a complete timer's report. 
        </Card.Text>
        <Button variant="primary">Start Session</Button>
    </Fragment>
  )};

export default Start;
