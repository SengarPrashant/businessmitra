import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Card, Jumbotron } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RelatedLink from '../../../components/RelatedLinks/relatedLinks';
import { commonData } from "../../../components/constants";
import BlogList from '../../../components/blogList';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const Content = ({ data, query, location, news }) => {
    const config = useSelector(state => state.config);
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const content = data ? (data.content.isSuccess ? data.content.data.info : undefined) : undefined;
    const relatedLinks = data ? (data.content.isSuccess ? data.content.data.pageLinks : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : commonData.location;
    const imgLoader=({src})=>{
        return `${'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/07/19091528/POP3-300x214.png'}`;
      }
   
    return (
        <>
            <NextSeo
                title={`Complete Online Registration of One Person company in ${(new Date().getFullYear())} in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}, (OPC) Private Limited Company Registration within 3 days in ${city[0].subDistrictName}`}
                description={`One Person Company Registration a few clicks away. One person Company=peace of mind and complete decision in one hand. OPC Registration within 3 days in ${city[0].subDistrictName}`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Fastest One Person Company Registration in ${city[0].subDistrictName}, Best quality services guaranteed. Best Consultants for One Person Company Registration in ${city[0].subDistrictName}, One Person Company registration services in ${city[0].subDistrictName}, Chartered accountants and Company Secretaries for One Person Company Registration in ${city[0].subDistrictName}. One Person Company Registration Fee in ${city[0].subDistrictName}`
                }]}
            />

            <Jumbotron className='bg-transparent shadow-sm border p-4 mt-3'>
                <Row>
                    <Col sm={3} lg={3} xl={3} md={12}>
                        <Image
                            loader={imgLoader}
                            src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/07/19091528/POP3-300x214.png"
                            layout="fill"
                            objectFit="cover"
                            placeholder='blur'
                        />
                        {/* <Image width='100%' height='100%' rounded src='https://legaldesk.com/wp-content/uploads/2017/01/Partnership-Firms-A-Detailed-Guide.jpg' /> */}
                    </Col>
                    <Col sm={9} md={12} lg={9} xl={9}>
                        <Card.Title>
                            {content &&
                                <h2>
                                    {content.filter(x => x.infoCode == 'title')[0].value.replace('@City-A', city[0].subDistrictName)}
                                </h2>}
                        </Card.Title>
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc')[0].value.replace('@City-A', city[0].subDistrictName)}
                        </p>}
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc1')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc2')[0].value.split('@City-A').join(city[0].subDistrictName)}
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
                                    {`What you get with Baijoo?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <b>You will get most honest, genuine and reliable consultants just as a well-wisher of your business both personally and professionally.</b>
                                <b>We reasonably assess your business and advise accordingly</b>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Advantages of One Person Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>Registration of one person company is done by Registrar of Companies and is a Body incorporate like other companies.</li>
                                    <li>Director and shareholder of an OPC is a single person and thus no conflicts in decision.</li>
                                    <li>Limited liability of the director of OPC like companies.</li>
                                    <li>Fund raising and reliability.</li>
                                    <li>Registration with Registrar of companies provides more Trust and Prestige.</li>
                                    <li>Minimum Compliances for OPC.</li>
                                    <li>Easy decision making and management of the company.</li>
                                    <li>Less chances of closure of business due to disputes.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`OPC Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <p>One person Company is registered with Registrar of companies which comes under Ministry of Corporate affairs and thus the one-person company is a Body Incorporate. One person enjoys the privilege of being director and share-holder also just having another person as a nominee.</p>
                                <p>The privilege of being a sole director of a company gives you all the powers and decision making on one hand while the Limited liability provides you security from bigger losses thus an OPC provides you more opportunities for business with limited liability.</p>
                                <p>The OPC is fit for those who believe in their decisions and have strong desire of operating a business as body incorporate. Thus the scheme of OPC Registration is attracting young entrepreneurs to start and grow their business in easy way and with minimum compliances.</p>
                                <p>An OPC may get easy funding from Venture capitals, financial institutions and angel investors etc.</p>
                                <p>An OPC model of business provides you more reliability and prestige in the market being registered with Ministry of Corporate affairs.</p>
                                <p>The name of an OPC ends with the Suffix ‘(OPC) PRIVATE LIMITED’.</p>
                                <p>An OPC gets converted in to PVT LTD Company if it crosses the annual turnover of Rs.2 crores.</p>
                                <p>The registration of OPC takes a minimum of 3-10 days.</p>

                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Time Required for One Person Company Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                The registration of One Person Company takes a minimum of 3-10 days.
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Process of Incorporation of One PErson Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>Application of name approval of Company.</li>
                                    <li>Drafting and Approval of Memorandum of Association (MOA) and Articles of Association (AOA)</li>
                                    <li>Application of Registration of Pvt Ltd Company along with MOA and AOA</li>
                                    <li>Approval of Registration of Company</li>
                                    <li>Issue of Company Identification Number (CIN) and Incorporation Certificate.</li>
                                    <li>Issue of PAN and TAN of the Company</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    Documents Required for OPC Registration
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <p>PAN Card, Aadhar Card, Address Proof and Photograph of Director and Nominee.</p>
                                <p>Address proof of the business premises.</p>
                                <p>NOC and Rent Agreement and Utility bill of the Landlord of the Business Premises in cases Business Premise is rented.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title id="plans">
                                    {`Trademark Registration of OPC in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                An OPC can enjoy the registration of its Trademark / Brand to stop others from using the goodwill of its Trademark / Brand. Only requirement for the Trademark Registration is the distinctiveness of the Trademark from others.
                            </Col>
                        </Row>
                    </Col>
                    {relatedLinks && <Col sm={12} md={12} lg={3} xl={3}>
                        <RelatedLink data={relatedLinks} />
                    </Col>}
                </Row>
            </div>
            <Row>
                <Col>
                    <Card.Title>
                        <h3>OPC Firm Registration Plans</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Container fluid>
                {data && <ServicePlan data={data.plans} />}
            </Container>



            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>
                            {`FAQs on OPC Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                        </h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. Who can start/ open an OPC?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">Any Indian citizen can start an OPC with the age of majority (18 Years of age) and of sound mind.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. What is the eligibility to be a Director of an OPC?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">A person must be of 18 years of age and of sound mind can be a Director of an OPC and the same criteria is also applicable to be a nominee in the OPC.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. Can I start an OPC if I am salaried person?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            Yes you can start an OPC with written approval/ consent of the owner/director of the Organization where you are working.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. What is the capital required for starting an OPC?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            <p>The minimum authorized capital required for an OPC is Rs. 1 Lakh and Government fee is payable on the same for issuing a minimum of shares worth Rs. 1 Lakh. However an OPC can be started with any amount as there is no proof of capital invested is to be submitted with MCA.</p>
                            <p>There is no limitation on the minimum capital required to start a LLP as there is no requirement to show proof of capital invested during the incorporation process.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. What should I do for quick incorporation of OPC?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Try choosing a unique name which is not similar to existing companies and LLP and contact Chartered Accountant or Company Secretary or a Company Lawyer who will help you in starting and operating your OPC easily.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. What is the annual compliance of an OPC.
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                            You need to file GST and Income Tax returns on time including annual filing and Financial Audits.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
            <Row>
                <Col sm={12}>
                    <BlogList data={data.blogs} />
                </Col>
            </Row>
        </>
    )
}

export default Content;