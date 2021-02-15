import Head from 'next/head';
import styles from '../../../styles/Home.module.scss'

const Content = ({ query }) => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Home page {query ? query.param : ''}</h1>
                 {/* {JSON.stringify(query)} */}
            </main>
        </div>
    )
}

export default Content;