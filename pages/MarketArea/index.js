import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { addCity } from '../../redux/actions/configActions';
import { InputGroup, FormControl, Table, Spinner, Accordion, Button, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { getLocationList } from '../api/Pages';

const index = ({ data }) => {
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const [searchText, setSearchText] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let temp = data.isSuccess ? data.data : [];
        setList(temp);
    }, []);

    const getNextList = () => {
        setLoading(true)
        getLocationList(searchText, list.length, 100).then(res => {
            setLoading(false);
            let temp = JSON.parse(JSON.stringify(list));
            if (res.status === 200) {
                res.data.map(el => {
                    temp.push(el);
                })
                setList(temp);
            }
        }).catch(err => {
            setLoading(false);
        });
    }

    const onSearch = (e) => {
        if (e.charCode === 13) {
            if (e.target.value.trim().length === 0) {
                setSearchText(null)
            }
            else {
                setSearchText(e.target.value)
            }
            setLoading(true)
            getLocationList(e.target.value, 0, 100).then(res => {
                setLoading(false);
                if (res.status === 200) {
                    setList(res.data);
                }
            }).catch(err => {
                setLoading(false);
            });
        }
        else {
            return false;
        }
    }

    return (
        <div>
            <Row className="centerFlex">
                <Col sm={12} md={12} lg={6} xl={6} className='text-center'>
                    <Card.Title>
                        <h2>Market Area</h2>
                    </Card.Title>
                </Col>
            </Row>
            <Row className="centerFlex">
                <Col sm={12} md={6} lg={6} xl={6}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                {loading && <Spinner animation="border" variant='primary' style={{width:'1rem',height:'1rem'}} />}
                                {!loading && <FontAwesomeIcon icon={faSearch} className='icon16' />}
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            size="lg"
                            width="50%"
                            placeholder="Search"
                            aria-label="search"
                            aria-describedby="basic-addon1"
                            onKeyPress={onSearch}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Location</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((el, i) => {
                        return <tr key={el.id}>
                            <td>{i + 1}</td>
                            <td>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon16 text-info mr-3' />
                                <Link href={`/${el.subDistrictName}`}><a style={{ fontWeight: 'bold', fontSize: '17px' }} onClick={() => { dispatch(addCity(el.subDistrictName)) }}>{el.subDistrictName}</a></Link>
                            </td>
                            <td>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon16 text-info mr-3' />
                                <Link href={`/${el.districtName}`}><a style={{ fontWeight: 'bold', fontSize: '17px' }} onClick={() => { dispatch(addCity(el.districtName)) }}>{el.districtName}</a></Link>
                            </td>
                            <td>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon16 text-info mr-3' />
                                <Link href={`/${el.stateName}`}><a style={{ fontWeight: 'bold', fontSize: '17px' }} onClick={() => { dispatch(addCity(el.stateName)) }}>{el.stateName}</a></Link>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </Table>
            <div className='text-right mb-4'>
                {loading && <span className='viewMore'>
                    <Spinner animation="border" variant='primary' /> Loading...
                </span>}
                {!loading && <span className='viewMore' onClick={getNextList} >
                    View more <FontAwesomeIcon icon={faArrowRight} className='icon16' />
                </span>}
            </div>
        </div>
    )

}

export async function getServerSideProps(context) {
    const _data = await getLocationList(null, 0, 100);
    return {
        props: { data: _data }, // will be passed to the page component as props
    }
}

export default index;