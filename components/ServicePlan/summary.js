import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Summary = ({ data}) => {
    debugger
    const plans = data.isSuccess ? data.data.planTypeList : undefined;
    return (
        <Fragment>
            <Row>
                    {
                        plans && plans.map((plan, i) => {
                            return <Col key={plan.id} sm={4} className='mb-4 mb-md-0'>
                                <div className='p-4 bg-light'>
                                    <Row>
                                        <Col sm={12} md={12} lg={7}><Card.Title>{plan.name} ({plan.type})</Card.Title></Col>
                                        <Col sm={12} md={12} lg={5} className='text-md-left text-sm-right text-lg-right'>
                                            <Card.Title className="text-black-50"> Price {plan.price} {plan.currency}</Card.Title>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12} className='text-justify'>
                                            {plan.shortSummary}
                                    <a href="#plans" className='viewMore'>
                                                <span className='viewMore'>
                                                    View more <FontAwesomeIcon icon={faArrowRight} className='icon16' />
                                                </span>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        })
                    }
          </Row>
        </Fragment>
    )
}

export default Summary;