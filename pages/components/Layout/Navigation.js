import classes from '../../../styles/Navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {
    //https://www.youtube.com/watch?v=t0wZYzx0qdY
    return (
        <header className={classes.header}>
            <div className="row">
                <div className="col-sm-3">
                    <h2 className="logo">Logo</h2>
                </div>

                <div className="col-sm-9">
                    <nav className={classes.nav} role="navigation">
                        <Link href="javascript:void(0);" className={[classes.ic, classes.menu].join(' ') }>
                            <a>
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </a>
                        </Link>
                        <Link href="javascript:void(0);" ><a className="ic close"></a></Link>
                        <ul className={classes.mainNav}>
                            <li className="top-level-link">
                                <Link href="#"><a><span>Home</span></a></Link>
                            </li>

                            <li className="top-level-link">
                                <Link href='#' className={classes.megaMenu}><a><span>Products</span></a></Link>
                                <div className={classes.subMenuBlock}>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}>Clothing</h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>Mens</a></Link></li>
                                                <li><Link href="#"><a>Womens</a></Link></li>
                                                <li><Link href="#"><a>Kids</a></Link></li>
                                                <li><Link href="#"><a>New Born</a></Link></li>
                                                <li><Link href="#"><a>View All</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}>Handbags</h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>Wallets</a></Link></li>
                                                <li><Link href="#"><a>Athletic bag</a></Link></li>
                                                <li><Link href="#"><a>Backpack</a></Link></li>
                                                <li><Link href="#"><a>Bucket Bag</a></Link></li>
                                                <li><Link href="#"><a>View All</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}>Shoes</h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>Mens</a></Link></li>
                                                <li><Link href="#"><a>Womens</a></Link></li>
                                                <li><Link href="#"><a>Kids</a></Link></li>
                                                <li><Link href="#"><a>View All</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <div className= {[classes.bannersArea, 'row'].join(' ')}>
                                        <div className="col-md-6 col-lg-6 col-sm-6">
                                            <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%" />
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6">
                                            <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%" />
                                        </div>
                                    </div> */}

                                </div>
                            </li>
                            <li className="top-level-link">
                                <Link href="#"><a><span>Services</span></a></Link>
                            </li>
                            <li className="top-level-link">
                                <Link href='#' className={classes.megaMenu}><a><span>About</span></a></Link>
                                <div className={classes.subMenuBlock}>
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}>Company</h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>About</a></Link></li>
                                                <li><Link href="#"><a>Mission</a></Link></li>
                                                <li><Link href="#"><a>Community</a></Link></li>
                                                <li><Link href="#"><a>Team</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}>Media</h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>News</a></Link></li>
                                                <li><Link href="#"><a>Events</a></Link></li>
                                                <li><Link href="#"><a>Blog</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-4">
                                            <h2 className={classes.subMenuHead}><a>Careers</a></h2>
                                            <ul className={classes.subMenuLists}>
                                                <li><Link href="#"><a>New Opportunities</a></Link></li>
                                                <li><Link href="#"><a>Life @ Company</a></Link></li>
                                                <li><Link href="#"><a>Why Join Us?</a></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row bannersArea">
                                        <div className="col-md-6 col-lg-6 col-sm-6">
                                            <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%" />
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6">
                                            <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%" />
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="top-level-link">
                                <Link href="#"><a><span>Contact</span></a></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navigation;