import ServicePlan from '../../../components/ServicePlan/servicePlan';
import { Container, Row, Col } from 'react-bootstrap';

const Content = ({data,query}) => {
    debugger
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    //const content=data.content.isSuccess ?  data.content : undefined;

    return (
        <div>
            <h3>LLPRegistration Content { query ? JSON.stringify(query) : 'Home'}</h3>
            <Container fluid='md'>
              {data && <ServicePlan data={data.plans} />}
            </Container>
        </div>
    )
}

export default Content;