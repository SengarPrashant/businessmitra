import {useState,useEffect,useRef} from 'react';
import navStyles from '../../../styles/Nav.module.scss';
import Link from 'next/link';

//https://www.youtube.com/watch?v=a1T5UvQpEDs

const Navbar = () => {
    const [openMenu, setOpenMenue]=useState(false);
    const toggleMenu=(e)=>setOpenMenue(!openMenu);

    return (
        <header className={navStyles.header} id='navheader' >
            <div className={navStyles.logo}>
                <div style={{fontWeight:'14px', fontWeight:'bold'}}>Logo</div>
            </div>
            <ul className={[navStyles.menu,openMenu? navStyles.toggle :''].join(' ')}>
                <li onClick={toggleMenu}><Link  href='/login'><a>Registration</a></Link></li>
                <li>Trademark
                    {/* <ul>
                        <li><a href="#">Trademark 1 </a></li>
                        <li><a href="#">Trademark 2 </a></li>
                        <li><a href="#">Trademark 3 </a></li>
                    </ul> */}
                </li>
                <li><a href="#">Intellectual Property</a></li>
                <li><a href="#">Gst</a></li>
                <li><a href="#">Income Tax</a></li>
                <li><a href="#">Compliances</a></li>
                <li><Link href='/login'><a>Login / Register</a></Link></li>
                <div className={navStyles.close} onClick={toggleMenu} >X</div>
            </ul>
            <div className={navStyles.burger} onClick={toggleMenu}>Menu</div>
        </header>
    )


    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    // return (
    //     <header className={HomeStyles.header}>
    //         <Link href='/login'><a>login</a></Link>
    //         {/* <h3>Navbar</h3> */}
    //         <nav className={navStyles.navbar} role="navigation">
    //             <ul>
    //                 <li><a href="#">One</a></li>
    //                 <li><a href="#">Two</a>
    //                     <ul class="dropdown">
    //                         <li><a href="#">Sub-1</a></li>
    //                         <li><a href="#">Sub-2</a></li>
    //                         <li><a href="#">Sub-3</a></li>
    //                     </ul>
    //                 </li>
    //                 <li><a href="#">Three</a></li>
    //             </ul>
    //         </nav>
    //     </header>
    // )
}

export default Navbar;