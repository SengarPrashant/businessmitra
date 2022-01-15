import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss'
import { addAppText } from '../../redux/actions/configActions';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import HomeStaticBanner from '../HomeStaticBanner';
import AboutUS from '../About';
import Services from '../Services';


const Content = ({ query }) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    useEffect(() => {

    }, [])
    return (
        <>
        {/* <div className={styles.container}> */}
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                {/* <h1>Home page {query ? query.param : ''}</h1> */}
                <HomeStaticBanner/>
                </div>
                {/* {JSON.stringify(query)} */}
               

                
        </div>
        <AboutUS/>
        <Services/>
        
           
        </>
    )
}

export default Content;