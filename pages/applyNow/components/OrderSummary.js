import React, { useState, useEffect } from 'react';
import { Card, Button, Form, FormText, Row, Col } from 'react-bootstrap';
import { country, state } from "../../../components/commonData/CountryStateData";
import { useSelector } from "react-redux";
import Loader from '../../../components/Layout/Loader';
import AppLogo from '../../../components/Layout/AppLogo';

const OrderSummary = ({ selectedPlan, planPage }) => {
   
    return (
        <>
                    <Card className='positionUnset' style={{ height: '100%' }} >
                        <Card.Body className='p-5 bg-light'>
                            {selectedPlan.selected &&
                                <Row>
                                    <Col sm={12}>
                                        <div style={{ textAlign: "center" }}>
                                            <AppLogo size={35} />
                                            <div className="border-bottom pb-2">Baijoo provides all your fianacial services.</div>
                                        </div>
                                    </Col>
                                    <Col sm={12}><div style={{ fontSize: 32 }} className='font-weight-bold text-center mt-4 mb-4'>Order summary</div></Col>
                                    <Col sm={12}>
                                        <div style={{ fontSize: 32 }} className='font-weight-bold text-center mt-4 mb-4'>
                                            Service: {planPage}</div>
                                        <div style={{ fontSize: 32 }} className='font-weight-bold text-center mt-4'>
                                            Plan: {`${selectedPlan.planData.plan.name} (${selectedPlan.planData.plan.type})`}
                                        </div>
                                        <div className='font-weight-bold text-center pb-4 border-bottom'>{selectedPlan.planData.plan.caption}</div>
                                        <div style={{ fontSize: 32, height:150 }} 
                                        className='flex justify-content-center bg-light-custom font-weight-bold text-center mt-4 mb-4'>
                                            Order Total: {`${parseFloat(selectedPlan.planData.plan.price).toFixed(2)} 
                                            ${selectedPlan.planData.plan.currency}`}
                                        </div>
                                    </Col>
                                </Row>
                            }
                        </Card.Body>
                    </Card>
        </>
    )
}

export default OrderSummary