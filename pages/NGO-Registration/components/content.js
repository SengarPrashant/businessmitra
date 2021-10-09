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
                title={`EPF Registration for Organizations in ${query && query.param[0] ? query.param[0] : city[0].subDistrictName}.`}
                description={`EPF Registration for Employers with Baijoo in ${city[0].subDistrictName}.`}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `Online EPF Registration for Employers. Premium service of EPF Registration for Employers, Online EPF filing for Employers, Online ECR filing for PF, CA for EPF filing, Consultants for PF Registration, Consultants for PF filing, Best Consultants and Advisors for EPF Registration in
                    ${city[0].subDistrictName}, EPF Registration Fee in ${city[0].subDistrictName}`
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
                                    {`What is EPF Registration ?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <p>EPF is also called Employees Provident Fund which is meant for the benefit of employees of any organization. EPF is a certain monthly contribution shared by employees and employers to Provident fund managed by the Government.</p>
                                <p>The amount accumulated in the Provident Fund is paid to the Employees after retirement or cessation of the employment. The monthly contributions shared by employees and employers receive regular interest till the withdrawal.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Is PF Registration mandatory?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12} className="">
                                <p>PF Registration is mandatory for all employers, Establishments and organizations having strength of 20 or more employees. However, the employees are eligible for PF registration right from the beginning of their employment and hence the employers, Establishments and organizations may opt for PF Registration even if it is having less than 20 employees.</p>
                                <p>After the PF registration, the organizations can register every employee on the EPF portal and can generate UAN for each employee. If the employee is having an earlier UAN number, the same UAN is required to be added with that employer.</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Benefits of EPF Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <b>There are many advantages and benefits of EPF registration and the main beneficiaries are the employees. Maximum benefit of EPF registration is for those employees who are in a continuous employment of more than 10 years.</b>
                            </Col>
                            <Col sm={12} className="pt-3">
                                <b>Tax benefits</b>
                                <p>The PF contributions made by the employees are exempted from Tax under Section 80 C of Income Tax along with the interest earned on the PF amount is also exempt from Tax. </p>
                            </Col>
                            <Col sm={12} className="pt-3">
                                <b>Lifelong pension</b>
                                <p>As the contribution towards PF is 12 % of the basic salary by the employees and the equal amount is shared by the employers where 8.33 % of employer’s share is routed to the Employees' Pension Scheme (EPS) where 10 years of contributory membership ensures lifelong pension under Employees' Pension Scheme 1995.</p>
                            </Col>
                            <Col sm={12} className="pt-3">
                                <b>Insurance benefit</b>
                                <p>Then there are the benefits promised under the Employees Deposit Linked Insurance (EDLI) Scheme, which is an insurance cover provided by the EPFO. The registered nominee will receive a lump-sum payment in the event of the death of the person insured, during the period of the service.</p>
                            </Col>
                            <Col sm={12} className="pt-3">
                                <b>Premature withdrawal option</b>
                                <p>While EPFO strongly advises against treating PF money as a bank account - after all, the social security benefits accrue only when continuity is maintained - the body allows its members to make partial withdrawals after 5-10 years of service for meeting specific needs including medical treatment, home loan repayment and unemployment.</p>
                            </Col>
                            <Col sm={12} className="pt-3">
                                <b>Higher returns</b>
                                <p>That's not all. There is also the possibility of higher returns on your PF kitty in the future. The EPFO invests 5-15% of its investible deposits in exchange traded funds (ETFs).</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Time Required for EPF Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                Time Required for EPF Registration is 3 days.
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Process of EPF Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}?`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ol> <b>Following are the steps for EPF Registration</b>
                                    <li>To register the organisation, the employer will need to visit the EPFO portal, which is https://www.epfindia.gov.in/site_en/index.php and click on the option that says, ‘Establishment Registration’.</li>
                                    <li>Clicking on ‘Establishment Registration’ will lead you to the next page, which is https://registration.shramsuvidha.gov.in/user/register, where the manual can be downloaded. The user manual must be read completely by a new user before registration.</li>
                                    <li>Click on ‘Sign Up’ Button.</li>
                                    <li>Clicking on ‘Sign Up’ will ask for the Name, Email, Mobile Number, and Verification Code to be filled. After these details are filled, click on ‘SIGN UP’ to create your account.</li>
                                    <li>There will be an option called ‘Registration For EPFO-ESIC’.</li>
                                    <li>The next page will give you an option called ‘Apply for New Registration’. Clicking on that will give two options called ‘Employees’ State Insurance Act, 1948’ and ‘Employees’ Provident Fund and Miscellaneous Provision Act, 1952’, which can be checked and then click on the ‘Submit’ button.</li>
                                    <li>This leads you to a page where the details of the employer such as Establishment Details, eContacts, Contact Persons, Identifiers, Employment Details, Particulars of workers, Branch/Division, Activities, and Attachments are mentioned. All mandatory details that must be filled under each section are displayed with a red asterisk.</li>
                                    <li>The summary of the registration form can be viewed on the dashboard.</li>
                                    <li>Click on the ‘Submit’ button to submit the registration.</li>
                                    <li>This is followed by the employer’s Digital Signature Certificate (DSC) registration. For a fresh EPF registration application, DSC registration is mandatory.</li>
                                    <li>completion of DSC registration, you will receive an email from Shram Suvidha with a confirmation that the registration has been completed.</li>
                                </ol>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col sm={12}>
                                <Card.Title>
                                    {`Documents Required for EPF Registration in ${city[0].subDistrictName}, ${city[0].districtName} and ${city[0].stateName}.`}
                                </Card.Title>
                            </Col>
                            <Col sm={12}>
                                <ul>Employers need to furnish the following details to get EPF registration
                                    <li>Name & address of your company</li>
                                    <li>Name & address of your company</li>
                                    <li>Date of company incorporation</li>
                                    <li>Type of business activity</li>
                                    <li>Nature of business</li>
                                    <li>Director/partner's details</li>
                                    <li>Employee's Basic details</li>
                                    <li>Employees' salary details</li>
                                    <li>Bank account details of the company</li>
                                    <li>PAN card</li>
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
                        <h3>Plans for EPF  Registration</h3>
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
                            FAQs for EPF  Registration
                        </h3>
                    </Card.Title>
                </Col>
            </Row>
            <Jumbotron className='bg-transparent border p-0 mt-3'>
                <Accordion>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            1. How can I get EPF registration certificate online?
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bg-light">
                        You can get an EPF registration through due process of application filing and submission on Shram Suvidha Portal. Either You may contact us for the same in a quick way.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            2. What is PF registration number?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="bg-light">
                            Employee PF Account Number. The Employees' Provident Fund Account Number is an account number that can be used by employees to check the status of their EPF, the balance in the EPF account, etc. The number is mandatory for withdrawals from EPF.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            3. Can I open EPF account online?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="bg-light">
                            For EPF Registration procedure, an employer can choose to register either offline or online, with the online option being the preferred mode for registration today. The registration form can be downloaded from the website of the Employees' Provident Fund Organization (EPFO).
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            4. Who is eligible for EPF?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="bg-light">
                            5,000 per month, it is mandatory for you to be opened an EPF account by your employer. Organizations with 20 or more employees are required by law to register for the EPF scheme, while those with fewer than 20 employees can also register voluntarily.
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                            5. How much pension we get from EPF?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className="bg-light">
                            Effective from September 1, 2014, the contribution will be made as follows: 8.33% of Rs 15,000 = Rs 1250. Kasturirangan says, "The formula to calculate the EPS pension is as follows: Monthly pension amount= (Pensionable salary X pensionable service) /70."
                        </Card.Body>
                    </Accordion.Collapse>
                    <Card.Header className="bg-transparent">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            6. Is EPF tax free?
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body className="bg-light">
                            Under the existing tax provisions, interest received/accrued from employee's provident fund (EPF) is exempt from tax. It is proposed that the interest earned on the EPF contributions (only employee contribution) above ₹2.5 lakh a year will now be taxable.
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>
            </Jumbotron>
        </>
    )
}

export default Content;