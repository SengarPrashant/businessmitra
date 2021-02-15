import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Row, Col, Container, Card, Button, Media, FormGroup, FormControl, FormLabel, FormText } from 'react-bootstrap';
import { useRouter } from 'next/router';

const FranchiseeRegistration = (props) => {
    const router=useRouter();
    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    return (
        <Container className='screenCenter'>
            <h1>Franchisee Registration</h1>
        </Container>
    )
}

export default FranchiseeRegistration;