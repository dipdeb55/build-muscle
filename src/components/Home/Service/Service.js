import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="secondary" className="mx-2">Check Out</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;