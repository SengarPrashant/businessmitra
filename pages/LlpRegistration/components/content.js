import ServicePlan from '../../components/ServicePlan/servicePlan';
import { Container, Row, Col } from 'react-bootstrap';

const Content = ({query}) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <div>
            <h3>LLPRegistration Content { query ? JSON.stringify(query) : 'Home'}</h3>
            <Container fluid='md'>
                <ServicePlan planKey='LLPFirm' />
            </Container>
        </div>
    )
}

export default Content;