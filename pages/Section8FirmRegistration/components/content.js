import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { useSelector } from 'react-redux';
import RelatedLink from '../../../components/RelatedLinks/relatedLinks';
import { commonData } from "../../../components/constants";

const Content = ({ data, query, location }) => {
    const config = useSelector(state => state.config);
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const content = data ? (data.content.isSuccess ? data.content.data.info : undefined) : undefined;
    const relatedLinks = data ? (data.content.isSuccess ? data.content.data.pageLinks : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : commonData.location;

    return (
        <>
        <div className="innerContainer">
            <NextSeo
                title={`Section 8 Company Online application in ${(new Date().getFullYear())}. Section 8 Company Registration in three clicks in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}.`}
                description={`Section 8 Company Registration online made easy and fast, Step by step guidance for Registration of Section 8 Company online in ${city[0].subDistrictName}`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `FSection 8 Company in ${(new Date().getFullYear())} online in ${city[0].subDistrictName}, Section 8 company registration online ${(new Date().getFullYear())},Incorporation of Section 8 company, Section 8 NGO Registration, Section 8 Non-profit company, Section 8 company registration cost, CA for for Section 8 Company Registration in ${city[0].subDistrictName}, Section 8 Company registration services in ${city[0].subDistrictName}, Company Secretaries for Section 8 Company Registration in ${city[0].subDistrictName}, MOA and AOA of Section 8 Company in ${city[0].subDistrictName}`
                }]}
            />

            <Jumbotron className='bg-transparent shadow-sm border p-4 mt-3'>
                <Row>
                    <Col sm={3} lg={3} xl={3} md={12}>
                        <Image width='100%' height='100%' rounded src='https://legaldesk.com/wp-content/uploads/2017/01/Partnership-Firms-A-Detailed-Guide.jpg' />
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
                                    {`What is Section 8 Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <b>Section 8 Company is a non-profit company /organization where the profits of the company is not passed on to the members, shareholders or directors of the company. However, Section 8 company can employ the people and pay salaries but its members are not provided with any remuneration or any kind of profit. Section 8 Company is similar to NGO and Public trusts solely for the purposes for public services and social services. In contrast with the NGO or Public Trust which are registered with the Registrar of societies and governed by the societies act, the Section 8 Company is registered with the Registrar of companies, Ministry of Corporate affairs and governed and regulated by Companies act 2013. The members of the Section 8 company are called directors who can also be shareholders.</b>
                                <p>The minimum Requirement for registration of Section 8 Company is two Directors and two shareholders where a natural person can be director as well as a shareholder whereas a corporate entity can also be a shareholder in Section 8 Company. </p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Features and benefits of Section 8 Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12} className="">
                                <ul>
                                    <li>Section 8 Company is a Non-profit Organization similar to an NGO or a Trust</li>
                                    <li>However, Section 8 company is registered with Registrar of Companies, Ministry of Corporate affairs.</li>
                                    <li>Section 8 Company has many Tax benefits and exemptions.</li>
                                    <li>Section 8 company is always on a higher footing than an NGO or trust and more reliable and credible.</li>
                                    <li>Section 8 company has similar provisions of Limited liability of its Members, Directors and Shareholders as in other companies.</li>
                                    <li>Section 8 Company is registered with a sole purpose of social services and not for the benefits of its members or directors.</li>
                                    <li>Section 8 company can be registered for exemption under section 12 A and 80 G of income tax and can receive donations and issue a tax Exempted Receipt.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Time Required for Section 8 Company Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                Depending upon the name availability and approval of name, the registration of <b>Section 8 Company</b> may take 3-10 days for completion of procedure.
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Process of Incorporation of Section 8 Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>The first step is the application for name approval of Company. However, Name approval application along with all the SPICE+ forms can be submitted at once if the name is completely unique. However, name approval at the first step is recommended because you need to provide Rent agreement and NOC as a proof of possession of registered address and this document must contain name of the desired Company. Thus, if you are submitting the application of name approval and SPICE+ form together and the name is not approved, you will have to prepare Rent agreement and NOC again.</li>
                                    <li>Application for digital Signature if required.</li>
                                    <li>Filling Spice+ Part B</li>
                                    <li>Drafting of Memorandum of Association (MOA).</li>
                                    <li>Drafting of Articles of Association (AOA)</li>
                                    <li>Preparation of Projected financial statement of the Section 8 Company</li>
                                    <li>Application of Registration of Section 8 Company along with MOA and AOA.</li>
                                    <li>Approval of Registration of Company.</li>
                                    <li>Issue of Company Identification Number (CIN) and Incorporation Certificate.</li>
                                    <li>Issue of PAN and TAN of the Company</li>
                                    <li>Issue of PF and ESI registration</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Documents Required for Registration of Section 8 Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <p>PAN Card, ID Proof, Address Proof and Photograph of Directors.</p>
                                <p>For ID proof of Directors / subscribers- anyone from Voter ID, Passport or Driving License is valid.</p>
                                <p>For ID proof of Directors / subscribers – anyone from Telephone bill, Mobile Postpaid bill, Electricity Bill, Bank statement with recent entry or bank passbook with recent entry.</p>
                                <p>If the business premises is owned by one of the directors then only NOC and Electricity bill will suffice.</p>
                                <p>NOC, Rent Agreement and utility bill of the Landlord of the Business Premises in cases Business Premise is rented.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title id="plans">
                                    {`Trademark Registration of of Section 8 Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                A Section 8 Company can enjoy the registration of its Trademark / Brand to stop others from using the goodwill of its Trademark / Brand. Only requirement for the Trademark Registration is the distinctiveness of the Trademark from others.
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
                        <h3>Section 8 company Registration Plans</h3>
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
                            {`FAQs for Section 8 company Registration.`}
                        </h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. Who can start/ open a Section 8 Company?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">Any two or more persons can start a Section 8 Company.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. What is the eligibility to be a Director in a Section 8 Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">
                            A person must be of 18 years of age and of sound mind. Foreign Nationals including foreign companies can be Directors of a Section 8 Company provided that at least one Director must be a resident of India.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. Can I start a Section 8 Company if I am salaried person?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            Yes, you can start a Section 8 Company with written approval/ consent of the owner/director of the Organization where you are working.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. What is the minimum Capital required to start a Section 8 Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            There is no minimum Capital to start a Section 8 Company.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. What should I do for quick incorporation of Section 8 Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Try choosing a unique name which is not similar to existing companies and LLP and contact Chartered Accountant or Company Secretary or a Company Lawyer who will help you in starting and operating your Section 8 Company easily.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. What is the annual compliance of a Section 8 Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                            You need to file GST, Income Tax returns, Annual Returns and Audits etc.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
            </div>
        </>
    )
}

export default Content;