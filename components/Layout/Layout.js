import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Nav from './Nav';
import Navigation from './Navigation';
import Footer from './Footer';
import Head from 'next/head';
import HeaderNav from './HeaderNav';

const Layout = ({ children }) => {
 
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderNav />
            {/* <Navbar /> */}
            {/* <Nav /> */}
            {/* <Navigation /> */}
            <div style={{fontSize: '1.2rem', paddingTop: 15, minHeight: '90vh', width:'80%', margin:'auto' }} >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;