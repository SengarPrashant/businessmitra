import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';
import Link from 'next/link';
import { AppLinks } from '../../../components/helpers/appLinks';

const Content = ({ data, query }) => {
    debugger
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const content = data ? (data.content.isSuccess ? data.content : undefined) : undefined;

    var text = 'We also provide the services for LLP Registration, One person Company Registration, Pvt Ltd Company Registration, Ltd Company Registration, EPF Registration, ESI Registration, Trademark Registration, Trademark Renewal, Trademark Objection reply, Trademark Rectification, Trademark opposition, Trademark counter Statement, Trademark Cancellation, Trademark-NOC, Trademark security Services, Trademark Hearing Services, Copyright Registration, Design Registration, Fssai Registration, Fssai License, Import Export code, Trust Registration, Udyam Registration, Psra License, ITR Filing, GST Registration, GST Filing, TDS Filing, ROC filing and Legal services in @City-A, @City-B and @City-C.';

    AppLinks.map(li => {
        text = reactStringReplace(text, li.text, (match, i) => {
            return <Link key={i} href={`/${li.li}`}><a className='text-info'>{match}</a></Link>
        })
    })

    return (
        <>
            <div>
                <Card.Title>
                    <h2>Partnership Firm Registration</h2>
                </Card.Title>
            </div>
            <Jumbotron className='bg-transparent shadow-sm border p-4 mt-3'>
                <Row>
                    <Col sm={3} lg={3} xl={3} md={12}>
                        <Image width='100%' height='100%' rounded src='https://www.filingbuzz.com/images/fb/1926531092-spPartnership-Firm-Registration.jpg' />
                    </Col>
                    <Col sm={9} md={12} lg={9} xl={9}>
                        <Card.Title>
                            {content && content.data && 
                            <h2>
                                {content.data.filter(x => x.infoCode == 'title')[0].value.replace('@city', query && query.param[0] ? query.param[0] : 'Delhi')}
                            </h2>}
                        </Card.Title>
                        {content && content.data && <h4>
                            {content.data.filter(x => x.infoCode == 'desc')[0].value.replace('@city', query && query.param[0] ? query.param[0] : 'Delhi')}
                        </h4>}
                        <div className='text-justify'>
                            Businessmitra is among the most reliable business consultants in @ city A which provides true and honest business advice to its clients. Our team comprises of most genuine and learned professionals and experts having vast experience in their fields. Thus Businessmitra only can provide you the true and most economic ways of business.
                        <p>
                                {text}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
            <Jumbotron className='bg-transparent p-0'>
                {data && <SummaryPlan data={data.plans} />}
            </Jumbotron>
            <div className='mb-4'>
                <Row>
                    <Col sm={12}>
                        <Card.Title>
                            What is the benefit of Partnership Firm in @ City-A, @City-B and @City-C?
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        Quick and easy start which requires only 4-15 days.
                        Minimum compliance compared to LLP, One Person Company (OPC) and Pvt Ltd Company.
                        Not much legal formalities.
                        Power of association of two or more partners.
                        Partners are jointly and severally liable to profits and losses of the Firm.
                        Minimum compliance to file only GST returns, Income Tax Returns etc. periodically.
                        Tax Audit of the partnership firm is required only when the turn-over of the Firm crosses a defined limit.
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title>
                            What kind of business a Partnership Firm can do in @ City-A, @City-B and @City-C?
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        A partnership firm can operate almost all kinds of business viz. Manufacturing Business, Trading (Wholesale and Retail), Marketing, Import Export Business, Service provider business, Work Contract etc.
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title>
                            What kind of Registration and licenses can be availed by a Partnership firm in @ City-A, @City-B and @City-C ?
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        Applicable registrations and licenses viz. Trademark Registration, PF and ESI Registration, FSSAI License, Import Export Code, Udyam Registration Etc. can also be availed by Partnership firm in @ City-A, @City-B and @City-C.
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title>
                            Partnership Firm Registration in @ City-A, @City-B and @City-C
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        Registration of Partnership firms is not mandated by the Partnership Act except in special circumstances. However Partnership Firms are registered to avoid legal issues in future. Two or more individuals can start Partnership Firm by simply getting a Partnership Deed and a PAN number in the name of Partnership Firm.
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title>
                            What is a Partnership Deed?
                    </Card.Title>
                        <Card.Title>
                            How to prepare a partnership deed in @ City-A, @City-B and @City-C?
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        A Partnership deed has all the information related to the name and address of Partners along with their age and shares owned by each Partner, the name and address of the Partnership Firm, share capital of the partnership firm and all other rules and laws of operation of Partnership Firm.
                        The partners can open a Current Account in the name of their Partnership Firm by simply providing GST Registration Certificate, Partnership Deed, PAN etc. depending upon the norms of the Banks and RBI guidelines.
                <p>The Partnership firm is registered with the Registrar of the firms and the Partnership deed can also be registered.
                </p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title>
                            Documents Required for Partnership Firm Registration
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        PAN Card, Address Proof and Photograph of Partners.<br />
                        Address proof of the business premises.
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={12}>
                        <Card.Title id="plans">
                            Trademark Registration for Partnership Firm in @ City-A, @City-B and @City-C
                    </Card.Title>
                    </Col>
                    <Col sm={12}>
                        A Partnership Firm can also enjoy the registration of his Trademark / Brand to stop others from using the goodwill of his Trademark / Brand. Only requirement for the Trademark Registration is the distinctiveness of the Trademark.
                </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <Card.Title>
                        <h3>Partnership Firm Registration Plans</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Container fluid='md' >
                {data && <ServicePlan data={data.plans} />}
            </Container>
            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>FAQs for Partnership Firm.</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. Who can start/ open a Partnership Firm?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">Any two or more Indian Citizens who are a resident of India can start a Partnership Firm.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. Can I start a Partnership Firm if I am salaried person?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">Yes, you can start a Partnership firm with written approval/ consent of the owner/director of the Organization where you are working.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. What is cost and capital required for starting a Partnership Firm?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            The cost of required Partnership Deed, registrations and licenses are the only cost involved apart from the capital which is invested in the business. There is no limitation on the minimum capital required to start Partnership Business.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. Can I convert my Partnership firm in to Private limited Company after sometime?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            The cost of required Partnership Deed, registrations and licenses are the only cost involved apart from the capital which is invested in the business. There is no limitation on the minimum capital required to start Partnership Business.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. What should I do to start a Partnership firm and how Businessmitra will help me in this?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Decide a Trade name by which you want to start your Firm and contact Businessmitra to get help. Lawyers will prepare a customized Partnership deed for you and professionals of Businessmitra will get necessary registrations and licenses applicable to your business and will help you to decide the way of your business.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;