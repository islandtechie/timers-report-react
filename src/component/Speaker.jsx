import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Speaker = ({ elements, speakers, setSpeakers }) => {

  const numElements = Array.from({length: elements}, () => 0);

  const handleChange = ({target: {name, value}}) => {

    setSpeakers({...speakers, hasChanged: true, [name]: value});

    console.log(speakers);

  }

  

  const items = numElements.map((num, index) => 
    {
      const speaker = index + 1;
      let sup = '';

      const determineSup = () => {
        switch (speaker) {
          case 1:
            sup = 'st';
            break;
          case 2:
            sup = 'nd';
            break;
          case 3:
            sup = 'rd';
            break;
          default:
            sup = 'th';
        }
      }

      determineSup();
      
      return (
        <Form.Group as={Row} className="mb-3" controlId={`speaker${index + 1}`} key={index}>
          <Form.Label column sm={2}>
            {index + 1}<sup>{sup}</sup> Speaker
          </Form.Label>
          <Col sm={10}>
              <Form.Control 
                type="text" 
                placeholder={`Enter ${index + 1}${sup} Speaker's Name`} 
                name={`speaker${index + 1}`}
                onChange={handleChange}
              />
          </Col>
        </Form.Group>
      )
    }
  );

  return (
    <Fragment>
      {items}
    </Fragment>
    
  );
};

export default Speaker;
