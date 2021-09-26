import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormText, Row, Col } from 'react-bootstrap';

const ApplyNowSlug = ({ code, name }) => {

    const [basicDetail, setBasicDetail] = useState({ Name: '', Email: '', Mobile: '' });
    const [basicDetailError, setBasicDetailError] = useState({ Name: '', Email: '', Mobile: '' });
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
                        <Form.Group controlId="form.Mobile">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name='Mobile' isInvalid={basicDetailError.Mobile} maxLength={10} placeholder="" onChange={onchange} />
                            {basicDetailError.Mobile && <FormText className='text-danger'>{basicDetailError.Mobile}</FormText>}
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

export default ApplyNowSlug