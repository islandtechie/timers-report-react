import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import Speaker  from '../component/Speaker';
import Evaluators  from '../component/Evaluators';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SessionInformation = (props) => {
    let navigate = useNavigate();

    const [speakers, setSpeakers] = useOutletContext();
    const [evaluators, setEvaluators] = useOutletContext();
    const [numSpeakers, setNumSpeakers] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const displayNone = {
        display: 'none'
    }

    const spkAmountOnChangehandler = (e) => {

            setNumSpeakers(parseInt(e.target.value));
    }

    const onSpkAmountClick = (e) => {

        setIsVisible(true)
        console.log(speakers);
    }

  return (
    <Form>
        <Row>
            <Col>
                <Card>
                    <Card.Header>Speakers</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Please enter Speaker Names in the order they perform. Only use what is needed.
                        </Card.Text>                 
                        <Row style={isVisible === true ? displayNone : null }>
                            <Col md={10}>
                                <Form.Control 
                                    type="number"
                                    min="0" 
                                    placeholder="How many speakers?" 
                                    name="spkAmount"
                                    onChange={spkAmountOnChangehandler}
                                />
                            </Col>
                            <Col md={2}>
                                <Button variant="primary" type="button" onClick={onSpkAmountClick}>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                        
                        {/* {[...Array(numSpeakers)].map((num, index) => <span key={index}>{num}</span>)} */}
                        {isVisible ? <Speaker 
                                        elements={numSpeakers} 
                                        speakers={speakers} 
                                        setSpeakers={setSpeakers}
                                    /> : null}                   
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>Evaluators</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Please enter Speaker Evaluator Names. Only use what is needed.
                        </Card.Text>
                        {isVisible ? <Evaluators 
                                        elements={numSpeakers}
                                        evaluators={evaluators} 
                                        setEvaluators={setEvaluators}
                                    /> : null}                  
                    </Card.Body>                
                </Card>
            </Col>            
        </Row>
        <Row>
            <Col style={{marginTop: 10 + 'px'}}>
            {isVisible ? <Button 
                            variant="success" 
                            size='lg'  
                            onClick={() => navigate("/session")}
                            >Start Session</Button> 
                            : null}
            </Col>
        </Row>
    </Form>
  );
};

export default SessionInformation;
