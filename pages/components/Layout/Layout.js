import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Nav from './Nav';
import Navigation from './Navigation';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
 
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Navbar /> */}
            <Nav />
            {/* <Navigation /> */}
            <div style={{ paddingTop: 70, minHeight: '90vh', textAlign:'center' }} >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;