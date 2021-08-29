import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useSelector, useDispatch } from 'react-redux';
import RelatedLink from '../../../components/RelatedLinks/relatedLinks';
import { commonData } from "../../../components/constants";

const Content = ({ data, query, location }) => {
    const config = useSelector(state => state.config);
    const content = data ? (data.content.isSuccess ? data.content.data.info : undefined) : undefined;
    const relatedLinks = data ? (data.content.isSuccess ? data.content.data.pageLinks : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : commonData.location;

    return (
        <>
            <NextSeo
                title={`Limited company Online Registration ${(new Date().getFullYear())} by best CA and lawyers. Public Limited Company ${(new Date().getFullYear())} in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}.`}
                description={`Ltd Company Registration online in ${(new Date().getFullYear())} Limited Company Registration online in India in ${city[0].subDistrictName}.`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Limited Company Registration ${(new Date().getFullYear())}, Register a limited company in @city-A, Limited Company registration services in @city-A, Chartered accountants for Limited Company Registration, Company Secretaries for Limited Company Registration in @city-A, Limited Company Registration Fee in @city-A, Public Limited Company Registration ${(new Date().getFullYear())}, Public Limited Company formation ${(new Date().getFullYear())}, Directors required for Limited Company registration, Limited Company Registration online ${(new Date().getFullYear())}`.split('@city-A').join(city[0].subDistrictName)
                }]}
            />

            <Jumbotron className='bg-transparent shadow-sm border p-4 mt-3'>
                <Row>
                    <Col sm={3} lg={3} xl={3} md={12}>
                        <Image width='100%' height='250px' rounded src='https://companyregistrationonline.in/wp-content/uploads/2017/01/Why-will-you-give-more-preference-to-LLP-over-partnership-firm-registration-registerllp-767x767-600x600.jpg' />
                    </Col>
                    <Col sm={9} md={12} lg={9} xl={9}>
                        <Card.Title>
                            {content &&
                                <h2>
                                    {content.filter(x => x.infoCode == 'title')[0].value.split('@City-A').join(city[0].subDistrictName)}
                                </h2>}
                        </Card.Title>
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'readmore')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                    </Col>
                </Row>

            </Jumbotron>
            <Jumbotron className='bg-transparent p-0'>
                {data && <SummaryPlan data={data.plans} />}
            </Jumbotron>
            <div className='mb-4'>
                <Row>
                    <Col sm={12} md={12} lg={9} xl={9} className='text-justify'>
                        <Row>
                            <Col sm={12}>
                                <Card.Title>
                                    {`What are Advantages of Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>A Public Limited company is the biggest form of Body Incorporate in India having a separate legal Identity which is registered with Registrar of companies and regulated and governed by Companies Act 2013.</li>
                                    <li>A public limited Company is the biggest form of business with maximum reliability and credibility due to its management and control vested in multiple stakeholders, directors and share-holders.</li>
                                    <li>Effective governance and implementation of projects, schemes and policies in a Public Limited Company by dedicated stakeholders brings up the desired results and helps in achieving the targeted goals.</li>
                                    <li>A Limited Company has always a better scope of growth and development by easier fund raising, issuing shares and attracting investors.</li>
                                    <li>A Public Limited company is considered to be safe in the terms of employment and attracts quality human resources and manpower from the industry to associate in its growth and development.</li>
                                    <li>A Public Limited Company is a prestigious institution with more trust and confidence by all of the stakeholders.</li>
                                    <li>Best implementation of compliances in a Public Limited Company always places it on a better footing and helps it in a long run.</li>
                                    <li>Power of association of seven or more people in Operation, Management and Decision making.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    {relatedLinks && <Col sm={12} md={12} lg={3} xl={3}>
                        <RelatedLink data={relatedLinks} />
                    </Col>}
                </Row>
            </div>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`Registration of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    Registration of <b>Public Limited Company</b> which is also called Incorporation of Public Limited Company is done by the Registrar of companies which provides your company a corporate identity.  The registration and operation of Public Limited Company is governed by Ministry of Corporate Affairs, Companies Incorporation Rules 2014 and Companies Act 2013. The minimum Requirement for registration of Public Limited Company is three Directors and Seven Members where a natural person can be director as well as a shareholder whereas a corporate entity can only be a shareholder in the Public Limited Company.
                </Col>
                <Col sm={12}>
                    The registration of <b>Public Limited Company</b> takes a minimum of 5-15 days.
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`What do I need to do before registration of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    <ul>
                        <li>Review and analyze your business Idea again and again and seek expert comments on your business idea specifically positive ones.</li>
                        <li>Seeking professional advisory from a genuine and expert business consultant or a good chartered accountant or a business lawyer is always on a higher footing while planning your business idea.</li>
                        <li>Research and analyze market reports and market survey and try exploring the scope and prospects of your business idea since more and more clarity on the business idea is a key to success of the business.</li>
                        <li>Determine the availability of funding and honest, dedicated and smart people to associate your business as directors or shareholders.</li>
                        <li>Always try keeping good understanding between the stakeholders and managing the same much efficiently.</li>
                        <li>Try choosing a unique name of the company and its objects as per your business idea.</li>
                        <li>Hiring a good business consultant your business is always helpful in gaining the best and desired results.</li>
                    </ul>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`Process of Incorporation of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    <ul>
                        <li>Application of name approval of Company.</li>
                        <li>Drafting and Approval of Memorandum of Association (MOA) and Articles of Association (AOA).</li>
                        <li>Application of Registration of Public Limited Company along with MOA and AOA.</li>
                        <li>Approval of Registration of Company.</li>
                        <li>Issue of Company Identification Number (CIN) and Incorporation Certificate.</li>
                        <li>However MCA has simplified the process of Name approval and Incorporation of PVT LTD Company by implementing ‘RUN’ and ‘SPICe’ Processes.</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`Documents Required for Registration of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    <ul>
                        <li>PAN Card, Aadhar Card, Address Proof and Photograph of Directors and subscribers.</li>
                        <li>Bank Statement of Directors and subscribers.</li>
                        <li>Address proof of the business premises.</li>
                        <li>NOC and ID proof of the Landlord of the Business Premises in cases Business Premise is rented.</li>
                        <li>Approval of Registration of Company within 2-5 working days.</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title id="plans">
                        {`Trademark Registration of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    A Public Limited Company can enjoy the registration of its Trademark / Brand to stop others from using the goodwill of its Trademark / Brand. Only requirement for the Trademark Registration is the distinctiveness of the Trademark from others.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Title>
                        <h3>Pvt Ltd Firm Registration Plans</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Container fluid>
                {data && <ServicePlan data={data.plans} />}
            </Container>

            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>{`FAQs on Registration of Public Limited Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}`}</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. Who can start/ open a Public Limited Company?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">Any Seven or more persons can start a Public Limited Company.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. What is the eligibility to be a Director in a Public Limited Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">A person must be of 18 years of age and of sound mind. Foreign Nationals including foreign companies can be Directors of Public Limited Company as there is no limitation on citizenship and residency.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. Can I start a Public Limited Company if I am salaried person?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            Yes you can start a Public Limited Company with written approval/ consent of the owner/director of the Organization where you are working.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. What is the minimum Capital required to start a Public Limited Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            You can start a Public Limited company with an authorized capital of Rs. 5 Lakh.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. What should I do for quick incorporation of Public Limited Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Try choosing a unique name which is not similar to existing companies and LLP and contact a Chartered Accountant or Company Secretary or a Company Lawyer who will help you in starting and operating your Public Limited Company easily.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. What is the annual compliance of a Public Limited Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                            You need to file GST and Income Tax returns on time along with annual compliances of ROC filing and Financial statements.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;