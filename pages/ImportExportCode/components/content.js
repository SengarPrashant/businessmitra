import ServicePlan from '../../../components/ServicePlan/servicePlan';
import SummaryPlan from '../../../components/ServicePlan/summary';
import { Accordion, Button, Table, Container, Row, Col, Image, Card, Jumbotron } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { useSelector } from 'react-redux';
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
                title={`Import Export Code(IEC)- License to import and export in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}.`}
                description={`Import Export Code(IEC) in ${(new Date().getFullYear())} in ${city[0].subDistrictName}, Export License ${(new Date().getFullYear())}, 
                Import License ${(new Date().getFullYear())}, IEC Registration in ${city[0].subDistrictName}`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Import Export code online application in ${(new Date().getFullYear())},
                    IEC registration in 3 clicks, DGFT license for Import and export, Online Process to Apply Import Export Code in
                     ${city[0].subDistrictName}, Advisors for Import Export Code in
                      ${city[0].subDistrictName}`
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
                                    {`What is Import Export Code (IEC) in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <p>Importer Exporter Code is also known as IEC which is a 10-digit code generally PAN number of the applicant either Individual, business or company and issued by DGFT (Director General of Foreign Trade), Department of Commerce, Government of India. Any individual or business entity requires Importer Exporter code if it is engaged in the business of Export or Import or intending to start the business of Export and import. IEC is required for import and export of goods as well as services. When a supplier of goods exports the goods or supplier of services exports the supply of services requires IEC similarly an importer of goods or importer of services requires Importer Exporter code.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Benefits of Import Export Code (IEC) in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12} className="">
                                <ul>
                                    <li>Expansion of business beyond the domestic market.</li>
                                    <li>Supply of goods out of the Indian territory.</li>
                                    <li>Supply of services out of the Indian territory.</li>
                                    <li>Import of goods in India for commercial purposes.</li>
                                    <li>Import of services in India for commercial purposes.</li>
                                    <li>IEC helps in extension of business throughout the globe.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Why do I need to get Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                The importers and exporters require the Import Export Code: -
                            <ul>
                                    <li>To clear their shipments from customs, IEC is required.</li>
                                    <l>To send funds abroad through banks for the purposes of Import.</l>
                                    <li>To Send shipments out of the country and exporting of goods.</li>
                                    <li>To receive foreign currency and the money is transferred directly into bank account of the Exporter in case of export of goods or services.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Who can apply for Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                The process of import and export in India is governed and regulated by the provisions of the Foreign Trade (Regulation) Rules, 1993 and the customs act. Any individual, proprietor, Partnership firm, Company or Association of persons including Trusts, NGO and societies can apply for Importer Exporter code who is engaged in the business or Import or Export and intending to start the Business of Import and Export.
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`What is the eligibility criteria to apply for Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                Any individual or company having a valid PAN card and a bank account, with valid business credentials and dealing in the business of import and export is eligible for Import Export code.
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Time Required for Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <b>Importer Exporter code (IEC) is generally approved and allotted on the same day of application and may also take more than 10-15 days depending upon the circumstances.</b>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Online application for Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <b>Importer exporter code is applied online after registration on the website of Directorate General of Foreign Trades  along with the application fee of Rs.500</b>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title id="plans">
                                    {`Documents Required for Import Export Code in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>
                                    <li>PAN card</li>
                                    <li>Cancelled cheque or Bankers Certificate</li>
                                    <li>Two copies of passport size photographs</li>
                                    <li>ID proof of Directors, partners, Members or proprietor</li>
                                    <li>Address proof of Directors, partners, Members or proprietor</li>
                                    <li>Valid Email ID of Directors, partners, Members or proprietor</li>
                                    <li>Valid Mobile Number of Directors, partners, Members or proprietor</li>
                                    <li>Address proof of business premises</li>
                                </ul>
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
                        <h3>FAQs for Importer Exporter code (IEC) Plans</h3>
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
                            {`FAQs for Importer Exporter code (IEC).`}
                        </h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. What is the main purpose of Export Import Act?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">
                            The main purpose of import export code is to regulate import and export along with regulating the entry and exit of goods or service in or outside India. IEC also regulates the payment of duties and prevents import or export of prevented / forbidden goods or services.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. Can we apply IEC code online?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">
                        Application for Registration of Importer Exporter code has been made completely online along with various other services related to Import and export has been available online for ease of doing business.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. What is the government fee for IEC code?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                        The Govt fee for Registration of IEC is Rs.500 which need to be paid online while submitting the application for IEC code.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. Is IEC code same as PAN number?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                        Now a days IEC is issued on the basis of PAN number of the individual or entity. The purpose of PAN based IEC is to find, track and regulate the Import and Export by an individual and entity.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. How do I find my IEC code?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                        You can check and verify your IEC on the DGFT portal easily
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. Who must obtain IE Code registration?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                        Any person or entity engaged in the business of Import or export or intending to start a business of Import or export is mandatorily required to get registration of IEC.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;