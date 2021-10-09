import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormText, Row, Col } from 'react-bootstrap';

const PaymentDetails = ({ code, name }) => {
    
    const [basicDetail, setBasicDetail] = useState({ Name: '', Email: '', Mobile: '', GSTIN:'', BusiessName:'', State : '', Country:'' });
    const [basicDetailError, setBasicDetailError] = useState({ Name: '', Email: '', Mobile: '',  GSTIN:'', BusiessName:'', State : '', Country:'' });
    const [paymentDetail, setPaymentDetail] = useState({});

    const onsubmit = (frm) => {
        const result = validateBasicDetail(basicDetail, setBasicDetailError);
        if (!result.isvalid) {
            setBasicDetailError(result.err);
            return false;
        }
        else {
            alert(JSON.stringify(basicDetail));
        }
    }

    const onchange = (evt) => {
        const { name, value } = evt.target;
        let detail = { ...basicDetail };
        detail[name] = value;
        const res = validateBasicDetail(detail, setBasicDetailError);
        setBasicDetailError(res.err);
        setBasicDetail({ ...detail });
    }
    const onCountryChange = () =>{

    }
    const validateBasicDetail = (_data, _errObj) => {
        let err = { ..._errObj };
        let data = { ..._data };
        let valid = true;
        Object.keys(data).map(key => {
            if (!data[key]) {
                err[key] = `${key} is required.`;
                valid = false;
            }
            else {
                if (key === 'Email') {
                    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (reg.test(data[key]) === false) {
                        err[key] = "Invalid email.";
                        valid = false;
                    }
                }
                if (key === 'Mobile') {
                    const reg = /^[0-9\-\+]{10,15}$/;
                    if (reg.test(data[key]) === false) {
                        err[key] = "Invalid mobile number.";
                        valid = false;
                    }
                }
            }
        });
        return { isvalid: valid, err };
    }
//className='d-md-none d-xs-none d-sm-none d-lg-block d-xl-block' 
    return (
        <>
            <Row>
                <Col className='d-none d-lg-block d-xl-block' >LEFT</Col>
                <Col>
                    <h1>{name.includes('register') ? `${name} form` : `${name} registration form`}</h1>
                    <Form>
                        <Form.Group controlId="form.Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" isInvalid={basicDetailError.Name} name='Name' placeholder="Enter name" onChange={onchange} />
                            {basicDetailError.Name && <FormText className='text-danger'>{basicDetailError.Name}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='Email' isInvalid={basicDetailError.Email} placeholder="name@example.com" onChange={onchange} />
                            {basicDetailError.Email && <FormText className='text-danger'>{basicDetailError.Email}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.GSTIN">
                            <Form.Label>GSTIN</Form.Label>
                            <Form.Control type="text" name='GSTIN' isInvalid={basicDetailError.GSTIN} maxLength={10} placeholder="" onChange={onchange} />
                            {basicDetailError.GSTIN && <FormText className='text-danger'>{basicDetailError.GSTIN}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.BusiessName">
                            <Form.Label>Busiess Name</Form.Label>
                            <Form.Control type="text" name='BusiessName' isInvalid={basicDetailError.BusiessName} maxLength={10} placeholder="" onChange={onchange} />
                            {basicDetailError.BusiessName && <FormText className='text-danger'>{basicDetailError.BusiessName}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.Country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name='Country' isInvalid={basicDetailError.Country} maxLength={10} placeholder="" onChange={onchange} />
                            {basicDetailError.Country && <FormText className='text-danger'>{basicDetailError.Country}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.State">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name='State' isInvalid={basicDetailError.State} maxLength={10} placeholder="" onChange={onchange} />
                            {basicDetailError.State && <FormText className='text-danger'>{basicDetailError.State}</FormText>}
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={onsubmit}>
                            Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default PaymentDetails