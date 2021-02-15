import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import data from './plans.json';
import { Container, Row, Col } from 'react-bootstrap';

const ServicePlan = ({ planKey }) => {
    const plans = data[planKey].plans;
    const services = data[planKey].Services;
    return (
        <Fragment>
            <Container fluid>
                <Row>
                    {
                        plans && plans.map((plan, i) => {
                            return <Col className="mb-3" xs={12} md={6} lg={4} sm={4} style={{ position: 'unset' }}>
                                <Card className="text-center" style={{ position: 'unset' }}>
                                    <Card.Body>
                                        <Card.Title>{plan.name}</Card.Title>
                                        <Card.Title className="text-danger">{`${plan.type} (${plan.price} ${plan.currency})`}</Card.Title>
                                        <Card.Text>
                                            {
                                                services && services.map((ser, index) => {
                                                    return <Row>
                                                        <Col >
                                                            <div style={{textDecoration: plan.services.includes(ser.id) ? 'none' : 'line-through'}} className='mt-3'>{ser.name}</div>
                                                        </Col>
                                                    </Row>
                                                })
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <Button variant="primary">Apply Now</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </Fragment>
    )
}

export default ServicePlan;