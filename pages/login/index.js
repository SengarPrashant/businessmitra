import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Row, Col, Container, Card, Button, Media, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Login = (props) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const router = useRouter();
    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    const gotoFranchiseeRegistration = () => {
        router.push('/FranchiseeRegistration')
    }
    const gotoUserRegistration = () => {
        router.push('/UserRegister')
    }

    return (
        <>
            <Head>
                <title>Login in {config.city ? config.city : ''}</title>
            </Head>
            <Container className='mt-5'>
                <Card className='positionUnset'>
                    <Card.Body>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='text-left'>
                                <Card.Title>Login to BusinessMitra</Card.Title>
                                <div className='text-center'>
                                    <img
                                        width={200}
                                        height={70}
                                        src="http://www.kutuhal.co.in/admin/dbimages/68c2.png"
                                        alt="Generic placeholder"
                                    />
                                </div>
                                <Row>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <FormLabel>User name</FormLabel>
                                            <FormControl type='text' placeholder="User name" />
                                            {false && <FormText className='text-danger'>Required field.</FormText>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl type='password' placeholder="Password" />
                                            {false && <FormText className='text-danger'>Required field.</FormText>}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <Button size='md' block>Login</Button>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col sm={6}>
                                        <Link href="#" ><a>Forget password?</a></Link>
                                    </Col>
                                    <Col sm={6} className='text-right'>
                                        {/* <Link href="#" ><a> Register here</a></Link> */}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='p-3'>
                                <Row>
                                    <Col>
                                        <Card.Title>
                                            Register now for <span className='text-success'>FREE</span>
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <Row className='text-left'>
                                    <Col sm={6}>
                                        <Card.Title>
                                            Be our customer
                                    </Card.Title>
                                        <Row>
                                            <Col>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id cursus metus, quis posuere ipsum. Nulla sed nisl vitae massa cursus lobortis a vel nulla. Curabitur ac nulla libero. Integer condimentum porttitor porta. Vestibulum dui est, egestas sed dictum ut, consequat sit amet eros. Vivamus sed accumsan augue. Pellentesque placerat ut lorem non faucibus.
                                        </Col>
                                        </Row>
                                        <Row className='mt-2'>
                                            <Col>
                                                {/* <Link href="#" ><a>Register</a></Link> */}
                                                <Button variant="outline-primary" onClick={gotoUserRegistration} block>Register</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={6}>
                                        <Card.Title>
                                            Be a Franchisee
                                    </Card.Title>
                                        <Row>
                                            <Col>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id cursus metus, quis posuere ipsum. Nulla sed nisl vitae massa cursus lobortis a vel nulla. Curabitur ac nulla libero. Integer condimentum porttitor porta. Vestibulum dui est, egestas sed dictum ut, consequat sit amet eros. Vivamus sed accumsan augue. Pellentesque placerat ut lorem non faucibus.
                                        </Col>
                                        </Row>
                                        <Row className='mt-2'>
                                            <Col>
                                                <Button variant="outline-primary" onClick={gotoFranchiseeRegistration} block>Be a Franchisee</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

            </Container>
        </>
    )
}

export default Login;