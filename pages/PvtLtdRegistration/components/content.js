import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';
import Link from 'next/link';
import { AppLinks } from '../../../components/helpers/appLinks';
import { NextSeo } from 'next-seo';
import { useSelector, useDispatch } from 'react-redux';
import RelatedLink from '../../../components/RelatedLinks/relatedLinks';
import {commonData} from "../../../components/constants";

const Content = ({ data, query, location }) => {
    const config = useSelector(state => state.config);
    const content = data ? (data.content.isSuccess ? data.content.data.info : undefined) : undefined;
    const relatedLinks = data ? (data.content.isSuccess ? data.content.data.pageLinks : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : commonData.location;

    // var text = `Our experts will co-ordinate with you throughout the company registration process and will educate and inform about all the due compliances of your pvt ltd company. You will also get expert opinion and services of Partnership Firm Registration, LLP Registration, One person Company Registration, Ltd Company Registration, EPF Registration, ESI Registration, Trademark Registration, Trademark Renewal, Trademark Objection reply, Trademark Rectification, Trademark opposition, Trademark counter Statement, Trademark Cancellation, Trademark-NOC, Trademark security Services, Trademark Hearing Services, Copyright Registration, Design Registration, Fssai Registration, Fssai License, Import Export code, Trust Registration, Udyam Registration, Psra License, ITR Filing, GST Registration, GST Filing, TDS Filing, ROC filing and Legal services in @City-A, @City-B and @City-C`;
    // text = text.replace('@City-A', city[0].subDistrictName);
    // text = text.replace('@City-B', city[0].districtName);
    // text = text.replace('@City-C', city[0].stateName);
    // AppLinks.map(li => {
    //     text = reactStringReplace(text, li.text, (match, i) => {
    //         return <Link key={i} href={`/${li.li}${(config.city ? '/' + config.city : '')}`}><a className='text-info'>{match}</a></Link>
    //     })
    // })

    return (
        <>
            <NextSeo
                title={`Pvt Ltd Company Registration ${(new Date().getFullYear())} within 3 days in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName} by best CA and lawyers`}
                description={`Best priced Pvt Ltd Company Registration Services and online Company Registration in India in an easy and economical way in ${city[0].subDistrictName}.`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Private Limited Company Registration, Pvt Ltd Company Registration in @city-A with best CA for Company registration. Most Reliable CS for Private Limited Company Registration in @city-A, pvt ltd registration in @city-A, register private limited company in @city-A, pvt ltd company registration online in @city-A, private limited registration in @city-A, register pvt ltd company in @city-A, incorporation of private limited company in @city-A, private ltd company registration in @city-A, pvt ltd company registration cost in @city-A, msme registration for private limited company in @city-A, register private limited in @city-A, private limited company registration cost in @city-A, private limited company formation in @city-A, pvt ltd registration online in @city-A, new pvt ltd company registration in @city-A, pvt ltd company formation in @city-A, opc pvt ltd registration in @city-A, pvt ltd firm registration in @city-A, company pvt ltd registration in @city-A, opc private limited company registration in @city-A, register private limited company online in @city-A, pvt ltd company incorporation in @city-A, pvt ltd co registration in @city-A, mca pvt ltd registration in @city-A, private ltd company registration online in @city-A, Private Limited Company registration services in @city-A, Private Limited Company Registration Fee in @city-A`.split('@city-A').join(city[0].subDistrictName)
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
                            {content &&
                                <h2>
                                    {content.filter(x => x.infoCode == 'title1')[0].value.split('@City-A').join(city[0].subDistrictName)}
                                </h2>}
                        </Card.Title>
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                        {content && <p className='text-justify'>
                            {content.filter(x => x.infoCode == 'desc1')[0].value.split('@City-A').join(city[0].subDistrictName)}
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
                                    {`What are the benefits of a PVT LTD Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>Being a registered Pvt Ltd company is in itself a mark of seriousness of business and represents a serious and bigger image before the clients or any other persons dealing with a Private Limited Company</li>
                                    <li>Feeling of pride, honor and confidence of being director and managing director of a company provides the entrepreneurs a higher pedestal in business transactions and exploring the growth path of the company</li>
                                    <li>Registration from MCA and identification as a body corporate provides the status of separate Legal Entity and existence.</li>
                                    <li>A Private Limited Company is considered to be more reliable by the customers and more credible by banks.</li>
                                    <li>Directors and subscribers have Limited liability towards the profits and losses of a Private Limited Company.</li>
                                    <li>A Private Limited company easily gets loans from banks and investments by investors.</li>
                                    <li>Decision and management by two or more persons mostly provide right direction and growth for a Private Limited Company.</li>
                                    <li>Recruitment and hiring of manpower are easy for a Pvt Ltd Company being reputed and prestigious establishment.</li>
                                    <li>Better chances of business transactions and negotiations.</li>
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
                        {`How to register PVT LTD Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    Hire a genuine CA, CS or a Company lawyer for Registration of PVT LTD Company who will guide you through all the processes involved and educate you about all the compliances and requirements of the company. A genuine consultant also guides you the right business ideas and decision making. Experts at Baijoo Legal also suggest you to decide the operations and transactions in all kinds of businesses and technical requirements including help in computer and information technology.
                </Col>
                <Col sm={12}>
                    To register a Private Limited Company, you are required to arrange at least two eligible persons for directors and to choose a unique name along with brief description of business activities and remaining things are done by professionals.
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`LLP Registration Process in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    Apply for DSC (Digital Signature Certificate).<br />
                    Update your DSC in MCA portal<br />
                    Choose a unique name and check availability on MCA portal<br />
                    Apply for name approval of LLP.<br />
                    Draft the constitution of LLP.<br />
                    Apply online for LLP Registration.<br />
                    LLP approval.<br />
                </Col>
            </Row>

            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`How much time required for Pvt Ltd Company Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    The registration of PVT LTD Company takes a minimum of 3-10 days.
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`What is the process of Pvt Ltd Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    <ul>
                        <li>Application of name approval of Company.</li>
                        <li>Name is approved within 1-2 working days.</li>
                        <li>Drafting and Approval of Memorandum of Association (MOA) and Articles of Association (AOA).</li>
                        <li>Application of Registration of Pvt Ltd Company along with MOA and AOA on the same day of approval of the company name.</li>
                        <li>Approval of Registration of Company within 2-5 working days.</li>
                        <li>Issue of Company Identification Number (CIN) and Incorporation Certificate.</li>
                        <li>Issue of PAN and TAN of the Company.</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title id="plans">
                        {`Documents Required for Registration of PVT LTD Company in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    PAN Card of Directors.
                    ID proof of Directors- Voter ID, Driving License or passport are considered as ID proof.
                    Address Proof of Directors- Bank Statement, Passbook with recent entry, Telephone Bill or Utility bill are eligible for address proof.
                    Photograph of Directors.
                    Address proof of the business premises- Utility bill.
                    If the Business premises is rented then NOC, rent agreement and Electricity Bill of the Landlord is required.
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

            <Row style={{ display: 'none' }}>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>Partnership Firm V/s Limited Liability Partnership (LLP)</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Row style={{ display: 'none' }}>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>Difference between Partnership Firm V/s Limited Liability Partnership (LLP)</h3>
                    </Card.Title>
                </Col>
            </Row>

            <Row style={{ display: 'none' }}>
                <Col sm={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Partnership Firm</th>
                                <th>Limited Liability Partnership (LLP)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Registration of Partnership Firm is not mandatory except in special circumstances and can be done any time after starting the business</td>
                                <td>The registration of LLP is mandated by law and before the start of business.</td>
                            </tr>
                            <tr>
                                <td>Partnership Firm is registered with Registrar of Firms.</td>
                                <td>LLP is registered by MCA (Ministry of Corporate Affairs) </td>
                            </tr>
                            <tr>
                                <td>Partnership Firm is less reliable form of business as compared to LLP.</td>
                                <td>LLP is more reliable form of business as compared to Partnership Firm.</td>
                            </tr>
                            <tr>
                                <td>Partnership Firm is governed by Indian Partnership Act 1932.</td>
                                <td>LLP is governed by Limited Liability Partnership Act 2008.</td>
                            </tr>
                            <tr>
                                <td>Partnership Firm has not separate legal status of its own and the partners of the Firm are jointly considered as Partnership Firm.</td>
                                <td>LLP has a separate legal status.</td>
                            </tr>
                            <tr>
                                <td>The partners are jointly and severally liable towards all the losses arising out of the partnership Firm.</td>
                                <td>The liability of the Partners are limited to the extent and value of shares in LLP.</td>
                            </tr>
                            <tr>
                                <td>Partners are agent of the Partnership firm as well as other partners.</td>
                                <td>In LLP the Partners are the agents of the Firm only.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>FAQs for Pvt Ltd Firm Registration.</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. What is required for Pvt Ltd company?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">Any two or more persons can start a PVT LTD Company.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. What is the eligibility to be a Director in a PVT LTD Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">A person must be of 18 years of age and of sound mind. Foreign Nationals including foreign companies can be Directors of a PVT LTD Company provided that at least one Director must be a resident of India.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. How much does it cost to register a Pvt Ltd Company in India?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            The cost to register a Pvt Ltd Company in India starts from Rs. 8000 for an authorized capital of Rs. 1 Lakh and may vary to any amount depending upon the amount of authorized capital.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. What is the minimum Capital required to start a Private Limited Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                        You can start a PVT LTD company with an authorized capital of Rs. 1 Lakh.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. What should I do for quick incorporation of PVT LTD Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                        Try choosing a unique name which is not similar to existing companies and LLP and contact Chartered Accountant or Company Secretary or a Company Lawyer who will help you in starting and operating your PVT LTD Company easily.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. What is the annual compliance of a PVT LTD Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                        You need to file GST, Income Tax returns, Annual Returns and Audits etc.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;