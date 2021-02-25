import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServicePlan = ({ data}) => {
    const plans = data.isSuccess ? data.data.planTypeList : undefined;
    const services = data.isSuccess ? data.data.serviceList : undefined;
    return (
        <Fragment>
            {<Container fluid>
                <Row>
                    {
                        plans && plans.map((plan, i) => {
                            return <Col key={plan.id} className="mb-3" xs={12} md={6} lg={4} sm={4} style={{ position: 'unset' }}>
                                <Card className="text-center shadow">
                                    <Card.Body>
                                        <div>
                                            <Card.Title>{plan.name}</Card.Title>
                                            <Card.Title className="text-danger">{`${plan.type} (${plan.price} ${plan.currency})`}</Card.Title>
                                        </div>
                                        <Card.Text>
                                            {
                                                services && services.map((ser, index) => {
                                                    return <Row key={index}>
                                                        <Col >
                                                            <div style={{ textDecoration: plan.services.split(',').includes("" + ser.id) ? 'none' : 'line-through' }} className='mt-3'>{ser.name}</div>
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
            </Container>}
        </Fragment>
    )
}

export default ServicePlan;