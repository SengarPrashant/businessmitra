import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {selectPlan} from '../../redux/actions/planActions';

const ServicePlan = ({ data }) => {
    const dispatch = useDispatch();
    const plans = data.isSuccess ? data.data.planTypeList : undefined;
    const services = data.isSuccess ? data.data.serviceList : undefined;
    const router = useRouter();
    const onApplynow = (_plan, _Service) => {
        dispatch(selectPlan({plan:_plan,service:_Service}));
        router.push({
            pathname: '/applyNow/[slug]',
            query: { ...router.query, slug: data.data.code, name: data.data.name },
        });
    }
    return (
        <Fragment>
            <Row>
                {
                    plans && plans.map((plan, i) => {
                        return <Col key={plan.id} className="mb-3" xs={12} md={6} lg={4} sm={4} style={{ position: 'unset' }}>
                            <Card className="text-center shadow">
                                <Card.Body>
                                    <div>
                                        <Card.Title>{plan.name}</Card.Title>
                                        <Card.Title className="text-danger">{`${plan.type} (${plan.price} ${plan.currency})`}</Card.Title>
                                        <Card.Title>{plan.caption}</Card.Title>
                                    </div>
                                    <Card.Text>
                                        {
                                            services && services.map((ser, index) => {
                                                return <Row key={index}>
                                                    <Col >
                                                        <div style={{ textDecoration: plan.services.split(',').includes("" + ser.id) ? 'none' : 'line-through' }} className='mt-1'>
                                                            <span className="mr-1">
                                                                {ser.name}
                                                            </span>
                                                            {ser.additionalInfo && <OverlayTrigger
                                                                placement="top" delay={{ show: 250, hide: 400 }}
                                                                overlay={<Tooltip id={`tooltip_${ser.id}`}>{ser.additionalInfo}</Tooltip>}
                                                            >
                                                                <FontAwesomeIcon id={`tooltip_${ser.id}`} icon={faQuestion} className='icon16' />
                                                            </OverlayTrigger>}

                                                        </div>
                                                    </Col>
                                                </Row>
                                            })
                                        }
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <Button variant="primary"
                                        onClick={()=>{onApplynow(plan,services)}} >Apply Now</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    })
                }
            </Row>
        </Fragment>
    )
}

export default ServicePlan;