import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Service.css'
import { Link, useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { name, img, price, description } = service;

    const navigate = useNavigate();

    return (
        <div className='service-container text-white'>
            <Card className='card-container' style={{ width: '18rem' }}>
                <Card.Img className='rounded' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="secondary" className="mx-2" onClick={() => navigate('/checkout')}> Check Out</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;