import React from 'react';
import Footer from './Footer';
import Head from 'next/head';
import HeaderNav from './HeaderNav';
import {useWindowSize} from './media';
import Stepper from "../StepForm/Stepper"

const Layout = ({ children }) => {
    const media=useWindowSize();
 
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderNav />
            {/* <div style={{fontSize: '1.2rem', paddingTop: media.md || media.sm ? 10 : 15, minHeight: '90vh', width: media.md || media.sm ? "90%" : "80%", margin:'auto' }} > */}
              <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;