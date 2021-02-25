import styles from '../../styles/Home.module.scss';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <>
            <footer className={styles.footer}>
                <Container fluid>
                    <Row>
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
                    </Row>

                </Container>
            </footer>
            <Container fluid className={styles.footerRights}>
                <Row>
                    <Col sm={6}>© Businessmitra - All right reserved</Col>
                    <Col sm={6}>
                        <span className={'rtFloat'}>© Businessmitra - All right reserved</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;