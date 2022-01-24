import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Evaluators = ({ elements, evaluators, setEvaluators }) => {

  const numElements = Array.from({length: elements}, () => 0);

  const handleChange = ({target: {name, value}}) => {

    setEvaluators({...evaluators, hasChanged: true, [name]: value});

    console.log(evaluators);

  }

  const items = numElements.map((num, index) => 
    {
      const evaluator = index + 1;
      let sup = '';

      const determineSup = () => {
        switch (evaluator) {
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
        <Form.Group as={Row} className="mb-3" controlId={`evaluator${index + 1}`} key={index}>
          <Form.Label column sm={2}>
            {index + 1}<sup>{sup}</sup> Evaluator
          </Form.Label>
          <Col sm={10}>
              <Form.Control 
                type="text" 
                placeholder={`Enter ${index + 1}${sup} Speaker Evaluator's Name`} 
                name={`evaluator${index + 1}`}
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

export default Evaluators;
