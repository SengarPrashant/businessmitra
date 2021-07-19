import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import reactStringReplace from 'react-string-replace';
import Link from 'next/link';
import { AppLinks } from '../../../components/helpers/appLinks';
import { NextSeo } from 'next-seo';
import { useSelector, useDispatch } from 'react-redux';

const Content = ({ data, query, location }) => {
    debugger
    const config = useSelector(state => state.config);
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const content = data ? (data.content.isSuccess ? data.content : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : [
        { subDistrictName: 'Delhi', districtName: 'Haryana', stateName: 'Punjab' }
    ];
    var text = 'Get services of best CA, CS and lawyers on fingertips and also get expertise services of  Partnership Firm Registration, One person Company Registration, Ltd Company Registration, EPF Registration, ESI Registration, Trademark Registration, Trademark Renewal, Trademark Objection, Trademark Rectification, Trademark opposition, Trademark counter Statement, Trademark Cancellation, Trademark-NOC, Trademark security Services, Trademark Hearing Services, Copyright Registration, Design Registration, Fssai Registration, Fssai License, Import Export code, Trust Registration, Udyam Registration, Psra License, ITR Filing, GST Registration, GST Filing, TDS Filing, ROC filing and Legal services in @City-A, @City-B and @City-C.';
    text = text.replace('@City-A', city[0].subDistrictName);
    text = text.replace('@City-B', city[0].districtName);
    text = text.replace('@City-C', city[0].stateName);
    AppLinks.map(li => {
        text = reactStringReplace(text, li.text, (match, i) => {
            return <Link key={i} href={`/${li.li}${(config.city ? '/' + config.city : '')}`}><a className='text-info'>{match}</a></Link>
        })
    })

    return (
        <>
            <NextSeo
                title={`LLP Registration online 2021 in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}, Best way of Limited Liability Partnership Registration in 2021 in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}`}
                description={`Now get free GST filing with online LLP registration through Baijoo Legal in ${city[0].subDistrictName}.`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Apply online for Limited Liability Partnership Registration in ${city[0].subDistrictName} and get Free GST filing for 6 months. Also get Expert advice for your business and free consultancy from best and experienced Chartered Accountants, Company Secretaries and company Lawyers in ${city[0].subDistrictName}`
                }]}
            />
            {/* <div>
                <Card.Title>
                    <h2>Partnership Firm Registration</h2>
                </Card.Title>
            </div> */}
            <Jumbotron className='bg-transparent shadow-sm border p-4 mt-3'>
                <Row>
                    <Col sm={3} lg={3} xl={3} md={12}>
                        <Image width='100%' height='250px' rounded src='https://companyregistrationonline.in/wp-content/uploads/2017/01/Why-will-you-give-more-preference-to-LLP-over-partnership-firm-registration-registerllp-767x767-600x600.jpg' />
                    </Col>
                    <Col sm={9} md={12} lg={9} xl={9}>
                        <Card.Title>
                            {content && content.data &&
                                <h2>
                                    {content.data.filter(x => x.infoCode == 'title')[0].value.split('@City-A').join(city[0].subDistrictName)}
                                </h2>}
                        </Card.Title>
                        {content && content.data && <p className='text-justify'>
                            {content.data.filter(x => x.infoCode == 'desc')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                        {content && content.data && <p className='text-justify'>
                            {content.data.filter(x => x.infoCode == 'desc1')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                        {content && content.data && <p className='text-justify'>
                            {content.data.filter(x => x.infoCode == 'readmore')[0].value.split('@City-A').join(city[0].subDistrictName)}
                        </p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className='text-justify mt-3'>
                            {text}
                        </div>
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
                                    {`LLP Registration benefits in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <Card.Title>The benefits of LLP (Limited liability Partnership) are: -</Card.Title>
                                <ul>
                                    <li>Limited liability of the partners.</li>
                                    <li>Easy Registration from MCA.</li>
                                    <li>Separate Legal identity in corporate form.</li>
                                    <li>More reliability than Partnership Firm.</li>
                                    <li>No requirement of minimum capital to start LLP.</li>
                                    <li>Minimum compliance and cost saving.</li>
                                    <li>More chances of funding from banks.</li>
                                    <li>Less registration cost as compared to Companies.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={3} xl={3}>
                        <Table bordered responsive>
                            <th>
                                <tr>Related Links</tr>
                            </th>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link href={`/LlpRegistration`}><a className='text-info'>LLP Registration</a></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href={`/LlpRegistration`}><a className='text-info'>LLP Registration</a></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href={`/LlpRegistration`}><a className='text-info'>LLP Registration</a></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link href={`/LlpRegistration`}><a className='text-info'>LLP Registration</a></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <Row className="mb-4">
                <Col sm={12}>
                    <Card.Title>
                        {`How to register LLP online in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    MCA has made LLP registration easy but you need help of professionals as LLP Registration involves many technical formalities such as DSC application, Designated Partner Identification Number (DPIN), Application for name approval, Drafting of constitution of LLP and online application. Thus it is better to get services of CA, Cs or company lawyer for LLP Registration.
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
                    <Card.Title  id="plans">
                        {`LLP Registration Documents in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                    </Card.Title>
                </Col>
                <Col sm={12}>
                    PAN Card of Partners.
                    ID proof of Partners- Voter ID, Driving License or passport are considered as ID proof.
                    Address Proof of Partners- Bank Statement, Passbook with recent entry, Telephone Bill or Utility bill are eligible for address proof.
                    Photograph of Partners.
                    Address proof of the business premises- Utility bill.
                    If the Business premises is rented then NOC, rent agreement and Electricity Bill of the Landlord is required.
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Title>
                        <h3>LLP Firm Registration Plans</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Container fluid>
                {data && <ServicePlan data={data.plans} />}
            </Container>

            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>Partnership Firm V/s Limited Liability Partnership (LLP)</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card.Title className='mt-3'>
                        <h3>Difference between Partnership Firm V/s Limited Liability Partnership (LLP)</h3>
                    </Card.Title>
                </Col>
            </Row>

            <Row>
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
                        <h3>FAQs for LLP Registration.</h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. What is LLP registration?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">LLP Registration is a form of Partnership Registration with limited liability and is done by MCA (Ministry of Corporate affairs).</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. Is LLP registration compulsory?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">Yes, the registration of LLP is compulsory and is mandated by Limited Liability Partnership Act 2008.</Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. Is LLP better than Pvt Ltd Company?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            It depends upon case to case. However, LLP enjoys the advantages and benefits of a corporate identity along with features of partnership and provides cost saving from less cost for registration and minimum compliances.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. How do I start an LLP?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            <div>Step-I - You need a Partner to start an LLP along with ID proof, Address proof and photograph of the partner.</div>
                            <div>Step-II – Then choose a unique name for your firm and contact an expert, Company Lawyer, CA or CS for registration processes.</div>
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. Who can be Partner in LLP / who can start an LLP?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Any individual or body corporate (except HUF or Karta) can be partner in LLP. Any two or more persons of sound mind can start an LLP.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. What is the eligibility to be a Partner in a LLP?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                            A person must be of 18 years of age and of sound mind and Foreign Nationals including foreign companies can be partners in a LLP provided that at least one designated partner must be a resident of India.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="6">
                            7. Can I start a LLP if I am salaried person?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body className="bg-light">
                            Yes you can start a LLP with written approval/ consent of the owner/director of the Organization where you are working.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="7">
                            8. What is the capital required for starting a LLP?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body className="bg-light">
                            There is no limitation on the minimum capital required to start a LLP as there is no requirement to show proof of capital invested during the incorporation process.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="8">
                            9. hat is the annual compliance of a LLP?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body className="bg-light">
                            You need to file GST and Income Tax returns on time besides Financial Audits which is required only if the LLP has turnover of more than 40 Lakhs/annum or Capital contribution is more than 25 Lakhs.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;