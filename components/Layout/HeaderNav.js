import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter, Router } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { addCity, removeCity } from '../../redux/actions/configActions';
import { translateInit, googleTranslateElementInit, setCookie } from "../helpers/googleTrans";

//https://www.youtube.com/watch?v=a1T5UvQpEDs

const HeaderNav = () => {
    const router = useRouter();
    const dispach = useDispatch();
    const config = useSelector(state => state.config);
    useEffect(() => {
        if (router.query.param) {
            let city = config.city ? config.city : '';
            let newCity = Array.isArray(router.query.param) ? router.query.param[router.query.param.length - 1] : router.query.param;
            if (city && newCity.toLocaleLowerCase() !== city.toLocaleLowerCase()) {
                dispach(addCity(router.query.param))
            }
        }
        translateInit();
    }, []);


    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark" className='p-3' >
            <Link href="/" passHref>
                <Navbar.Brand onClick={(event) => { dispach(removeCity()) }} className={'businesslogo'}>React-Bootstrap</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown renderMenuOnMount={true} title="Registration" id="collasible-nav-dropdown">
                        <Link href={'/PartnershipFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Partnership Firm Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/LlpRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >LLP Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/PvtLtdRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Pvt Ltd Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/LtdFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Ltd Firm Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/OPCFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >One Person Firm Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/Section8FirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Section 8 Company Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/ImportExportCode' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Import Export Code (IEC)</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/Psara-License' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >PSARA License</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/EPF-Registration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >EPF Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link href={'/NGO-Registration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >NGO Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown renderMenuOnMount={true} title="Trademark" id="collasible-nav-dropdown">
                        <Link href={'/PartnershipFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >1Partnership Firm Registration</NavDropdown.Item>
                        </Link>
                        <Link href={'/LlpRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >LLP Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.1">LLP Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown renderMenuOnMount={true} title="Intellectual Property" id="collasible-nav-dropdown">
                        <Link href={'/PartnershipFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Partnership Firm Registration</NavDropdown.Item>
                        </Link>
                        <Link href={'/LlpRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >LLP Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.1">LLP Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown renderMenuOnMount={true} title="Income Tax" id="collasible-nav-dropdown">
                        <Link href={'/PartnershipFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Partnership Firm Registration</NavDropdown.Item>
                        </Link>
                        <Link href={'/LlpRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >LLP Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.1">LLP Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown renderMenuOnMount={true} title="Compliances" id="collasible-nav-dropdown">
                        <Link href={'/PartnershipFirmRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >Partnership Firm Registration</NavDropdown.Item>
                        </Link>
                        <Link href={'/LlpRegistration' + (config.city ? '/' + config.city : '')} passHref>
                            <NavDropdown.Item >LLP Registration</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Item href="#action/3.1">LLP Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Link href={'/post'} passHref>
                        <Nav.Link eventKey={2} href="#">
                            Blogs
                        </Nav.Link>
                    </Link>

                </Nav>

                <Nav>
                    <div id="google_translate_element" className='text-right flex'></div>
                    <Link href='/login' passHref>
                        <Nav.Link eventKey={2} href="#memes">
                            <div className='centerFlex' >
                                <FontAwesomeIcon icon={faUser} className='icon16' />
                                <span className='ml-2'>Login / Register</span>
                            </div>
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default HeaderNav;