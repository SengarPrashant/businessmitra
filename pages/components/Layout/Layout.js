import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div style={{ paddingTop: 50, minHeight: '90vh' }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;