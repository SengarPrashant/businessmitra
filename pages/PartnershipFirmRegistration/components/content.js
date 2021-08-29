import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { useSelector } from 'react-redux';
import RelatedLink from '../../../components/RelatedLinks/relatedLinks';
import {commonData} from "../../../components/constants";

const Content = ({ data, query, location }) => {
    const config = useSelector(state => state.config);
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    const content = data ? (data.content.isSuccess ? data.content.data.info : undefined) : undefined;
    const relatedLinks = data ? (data.content.isSuccess ? data.content.data.pageLinks : undefined) : undefined;
    const city = (location && location.isSuccess && location.data.length > 0) ? location.data : commonData.location;

    return (
        <>
            <NextSeo
                title={`Get Partnership Firm Registration quickly in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}, Partnership deed in ${city[0].subDistrictName}`}
                description={`Register your Partnership Firm with guarantee within 15 days and give your business a kick-start in ${city[0].subDistrictName} and also get partnership deed within 3 days in ${city[0].subDistrictName}`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Best Chartered Accountant in ${city[0].subDistrictName}, Company Lawyer in ${city[0].subDistrictName}, Partnership firm registration online in ${city[0].subDistrictName}, Partnership Firm Registration Fee in ${city[0].subDistrictName}`
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
                                    {`What is the benefit of Partnership Firm in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
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
                                    {`What kind of business a Partnership Firm can do in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                    {/* What kind of business a Partnership Firm can do in {city[0].subDistrictName}, {city[0].districtName} and {city[0].stateName}? */}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                A partnership firm can operate almost all kinds of business viz. Manufacturing Business, Trading (Wholesale and Retail), Marketing, Import Export Business, Service provider business, Work Contract etc.
                </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`What kind of Registration and licenses can be availed by a Partnership firm in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                    {/* What kind of Registration and licenses can be availed by a Partnership firm in {city[0].subDistrictName}, {city[0].districtName} and {city[0].stateName}? */}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                {`Applicable registrations and licenses viz. Trademark Registration, PF and ESI Registration, FSSAI License, Import Export Code, Udyam Registration Etc. can also be availed by Partnership firm in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Partnership Firm Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                    {/* Partnership Firm Registration in {city[0].subDistrictName}, {city[0].districtName} and {city[0].stateName}? */}
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
                                    {`How to prepare a partnership deed in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                    {/* How to prepare a partnership deed in {city[0].subDistrictName}, {city[0].districtName} and {city[0].stateName}? */}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                A Partnership deed has all the information related to the name and address of Partners along with their age and shares owned by each Partner, the name and address of the Partnership Firm, share capital of the partnership firm and all other rules and laws of operation of Partnership Firm.
                                The partners can open a Current Account in the name of their Partnership Firm by simply providing GST Registration Certificate, Partnership Deed, PAN etc. depending upon the norms of the Banks and RBI guidelines.
                            The Partnership firm is registered with the Registrar of the firms and the Partnership deed can also be registered.
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
                                    {`Trademark Registration for Partnership Firm in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                    {/* Trademark Registration for Partnership Firm in {city[0].subDistrictName}, {city[0].districtName} and {city[0].stateName}. */}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                A Partnership Firm can also enjoy the registration of his Trademark / Brand to stop others from using the goodwill of his Trademark / Brand. Only requirement for the Trademark Registration is the distinctiveness of the Trademark.
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
                        <h3>Partnership Firm Registration Plans</h3>
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
                            Yes, there are procedures available to convert your Partnership firm into Private Limited Company but Time-consuming.
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