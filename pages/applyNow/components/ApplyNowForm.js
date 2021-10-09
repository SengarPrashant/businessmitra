import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form, FormText, Row, Col } from 'react-bootstrap';
import { country, state } from "../../../components/commonData/CountryStateData";
import { useSelector } from "react-redux";

const ApplyNowSlug = ({ code, name }) => {
    const [basicDetail, setBasicDetail] = useState({ Name: '', Email: '', Mobile: '', GSTIN: '', BusiessName: '', State: '', Country: '' });
    const [basicDetailError, setBasicDetailError] = useState({ Name: '', Email: '', Mobile: '' });
    const [paymentDetail, setPaymentDetail] = useState({});
    const selectedPlan = useSelector(state => state.plan);
    debugger
    const onsubmit = (frm) => {
        const result = validateBasicDetail(basicDetail, basicDetailError);
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
        const res = validateBasicDetail(detail, basicDetailError);
        setBasicDetailError(res.err);
        setBasicDetail({ ...detail });
    }
    const onCountryChange = () => {

    }
    const validateBasicDetail = (_data, _errObj) => {
        const regMobile = /^[0-9\-\+]{10,15}$/;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let err = { ..._errObj };
        let data = { ..._data };
        let valid = true;
        err.Name = data.Name ? '' : 'Name is required.';
        err.Email = data.Email ? '' : 'Email is required.';
        err.Mobile = data.Mobile ? '' : 'Mobile is required.';
        if (!err.Email) {
            err.Email = regEmail.test(data.Email) ? '' : 'Invalid email.';
        }
        if (!err.Mobile) {
            err.Mobile = regMobile.test(data.Mobile) ? '' : 'Invalid mobile.';
        }
        Object.keys(err).map(key => {
            if (err[key]) {
                valid = false;
            }
        })
        return { isvalid: valid, err };
    }
    //className='d-md-none d-xs-none d-sm-none d-lg-block d-xl-block'
    return (
        <>
            <Row>
                <Col sm={12} md={12} lg={6} >
                    <Card className='positionUnset' style={{height:'100%'}} >
                        <Card.Body>order summary</Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={12} lg={6}>
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
                            <Form.Control type="text" name='Mobile' isInvalid={basicDetailError.Mobile} placeholder="" onChange={onchange} />
                            {basicDetailError.Mobile && <FormText maxLength={10} className='text-danger'>{basicDetailError.Mobile}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.GSTIN">
                            <Form.Label>GSTIN</Form.Label>
                            <Form.Control type="text" name='GSTIN' isInvalid={basicDetailError.GSTIN} placeholder="" onChange={onchange} />
                            {basicDetailError.GSTIN && <FormText className='text-danger'>{basicDetailError.GSTIN}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.BusiessName">
                            <Form.Label>Busiess Name</Form.Label>
                            <Form.Control type="text" name='BusiessName' isInvalid={basicDetailError.BusiessName} placeholder="" onChange={onchange} />
                            {basicDetailError.BusiessName && <FormText className='text-danger'>{basicDetailError.BusiessName}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.Country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select" name='Country' onChange={onchange}>
                                <option value="">-Select-</option>
                                {country.map(item => {
                                    return <option key={item.code} value={item.code}>{item.name}</option>;
                                })}
                            </Form.Control>
                            {basicDetailError.Country && <FormText className='text-danger'>{basicDetailError.Country}</FormText>}
                        </Form.Group>
                        <Form.Group controlId="form.State">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" name='State' onChange={onchange}>
                                <option value="">-Select-</option>
                                {state.filter(s=>s.countryCode=basicDetail.Country).map(item => {
                                    return <option key={item.code} value={item.code}>{item.name}</option>;
                                })}
                            </Form.Control>
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

export default ApplyNowSlug