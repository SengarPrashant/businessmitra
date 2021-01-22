import styles from '../../../styles/Home.module.scss'
import Link from 'next/link';

const Navbar = () => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <header className={styles.header}>
            <Link href='/login'><a>login</a></Link>
            {/* <h3>Navbar</h3> */}
        </header>
    )
}

export default Navbar;