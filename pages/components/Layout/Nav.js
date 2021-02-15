import { useState, useEffect, useRef } from 'react';
import navStyles from '../../../styles/Nav.module.scss';
import Link from 'next/link';
import { useRouter, Router } from 'next/router';
import {useSelector,useDispatch} from 'react-redux';
import {addCity,removeCity} from '../../../redux/actions/configActions';

//https://www.youtube.com/watch?v=a1T5UvQpEDs

const Nav = () => {
    const [openMenu, setOpenMenue] = useState(true);
    const toggleMenu = (e) =>{
         //setOpenMenue(!openMenu)
        };
    const router = useRouter();
    const dispach=useDispatch();
    const config=useSelector(state=>state.config);

    useEffect(()=>{
        if(router.query.param){
            let city=config.city ?  config.city :'';
            let newCity=Array.isArray(router.query.param) ? router.query.param[router.query.param.length-1] : router.query.param;
            if(newCity.toLocaleLowerCase() !==city.toLocaleLowerCase()){
                dispach(addCity(router.query.param))
            }
        }
    },[]);


    return (
        <header>
            <div className={[navStyles.topnav, openMenu ? navStyles.responsive : navStyles.responsive].join(' ')} id='myTopnav'>
              <Link href='/' on ><a onClick={()=>{dispach(removeCity())}} className={'businesslogo'} >|Business Mitra|</a></Link>
                {/* <a href="#news">News</a> */}
                <div className={navStyles.dropdown} >
                    <button className={navStyles.dropbtn}>Registration
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent} >
                        <Link href={'/PartnershipFirmRegistration'+ (config.city ? '/'+config.city : '')}><a>Partnership Firm Registration</a></Link>
                        <Link href={'/LlpRegistration'+ (config.city ? '/'+config.city : '')} ><a>LLP Registration</a></Link>
                        <a href="#">One Person Company (OPC)Registration</a>
                        <a href="#">Pvt Ltd Registration</a>
                        <a href="#">Ltd Registration</a>
                        <a href="#">Section 8 Registration</a>
                        <a href="#">Trust/Society Registration</a>
                        <a href="#">Import/Export Code</a>
                        <a href="#">EPF Registration</a>
                        <a href="#">ESI Registration</a>
                        <a href="#">Fssai Registration</a>
                        <a href="#">Psra Lisence</a>
                        <a href="#">Udyam Registration</a>
                    </div>
                </div>
                <div className={navStyles.dropdown} >
                    <button className={navStyles.dropbtn}>Trademark
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent} >
                        <a href="#">Trademark Registration</a>
                        <a href="#">Trademark Objection Reply</a>
                        <a href="#">Amendment of Trademark Application</a>
                        <a href="#">Trademark Renewal Service</a>
                        <a href="#">Trademark Rectifiction Service</a>
                        <a href="#">NOC</a>
                        <a href="#">Trademark Opposition/Counter Statement</a>
                        <a href="#">Cancelation of Registered Trademark</a>
                        <a href="#">Trademark NOC</a>
                        <a href="#">Trademark Security Services(TSS)</a>
                        <a href="#">Speak with Trademark Expert</a>
                    </div>
                </div>
                <div className={navStyles.dropdown} >
                    <button className={navStyles.dropbtn}>Intellectual Property
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent} >
                        <a href="#">Copyright Registration</a>
                        <a href="#">Design Registration</a>
                    </div>
                </div>
                <div className={navStyles.dropdown}>
                    <button className={navStyles.dropbtn}>GST
                            <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent}>
                        <a href="#">GST Registration</a>
                        <a href="#">GST Filing</a>
                    </div>
                </div>
                <div className={navStyles.dropdown}>
                    <button className={navStyles.dropbtn}>Income Tax
                            <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent}>
                        <a href="#">Income Tax Filing</a>
                    </div>
                </div>
                <div className={navStyles.dropdown}>
                    <button className={navStyles.dropbtn}>Compliances
                            <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={navStyles.dropdownContent}>
                        <a href="#">Annual Filing</a>
                        <a href="#">TDS Filing</a>
                    </div>
                </div>
                <Link href='/'><a>News</a></Link>
                <a href="#home" className={true ? '' : navStyles.active}>Submit Inquiry</a>
                <Link href='/login'><a style={{float:'right'}}>Login / Register</a></Link>
                <a href="javascript:void(0);" style={{cursor:'pointer'}} className={navStyles.icon} onClick={toggleMenu}>&#9776;</a>
            </div>
        </header>
    )

}

export default Nav;