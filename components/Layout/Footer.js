import React from 'react';
import styles from '../../styles/Home.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    
    return (
        <>
            <footer className={styles.footer}>
                <div className="innerContainer">
                <Container fluid>
                <div id="google_translate_element" className='text-right'></div>

                <Row>
                    <Col md={3}>
                       <ul>
                        <h3> Company</h3>
                        <li>About Us</li>
                        <li>Our Advisors</li>
                        <li>Testimonial</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Careers</li>
                       </ul>
                    </Col>

                    <Col md={3}>
                       <ul>
                        <h3> Company</h3>
                        <li>About Us</li>
                        <li>Our Advisors</li>
                        <li>Testimonial</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Careers</li>
                       </ul>
                    </Col>

                    <Col md={3}>
                       <ul>
                        <h3> Company</h3>
                        <li>About Us</li>
                        <li>Our Advisors</li>
                        <li>Testimonial</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Careers</li>
                       </ul>
                    </Col>
                    <Col md={3}>
                       <ul>
                        <h3> Company</h3>
                        <li>About Us</li>
                        <li>Our Advisors</li>
                        <li>Testimonial</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Careers</li>
                       </ul>
                    </Col>
                </Row>
                    {/* <Row>
                        <Col>
                            <Row>
                                <Col className={styles.title}>
                                    Title 1
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 1</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 2</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 3</a></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className={styles.title}>
                                    Title 2
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 1</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 2</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 3</a></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className={styles.title}>
                                    Title 3
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 1</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 2</a></Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Link href='#'><a>Link 3</a></Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col> <Link href='/MarketArea'><a>Market Area</a></Link></Col>
                    </Row> */}

                </Container>
                </div>
            </footer>
            <Container fluid className={styles.footerRights}>
                <Row>
                    <Col className="text-center" sm={12}>© Businessmitra - All right reserved <span >© Businessmitra - All right reserved</span></Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Footer;