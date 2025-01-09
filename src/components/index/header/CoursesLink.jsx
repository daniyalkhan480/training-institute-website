import React from 'react'
import CoursesLayoutItem from './CoursesLayoutItem'

const CoursesLink = () => {
    return (
        <li className="with-megamenu has-menu-child-item">
            <a href="#">Courses <i className="feather-chevron-down" ></i></a>
            {/* <!-- Start Mega Menu  --> */}
            <div className="rbt-megamenu grid-item-2" >
                <div className="wrapper" >
                    <div className="row">
                        {/* <div className="col-lg-12">
                        <div className="mega-top-banner" style={{backgroundColor : "#ff0000a1"}}>
                            <div className="content">
                                <h4 className="title">Developer hub</h4>
                                <p className="description">Start building fast, with code samples, key resources and more.</p>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <div className="row row--15">
                        {/* <h3 className="rbt-short-title text-center">Course Layout</h3> */}

                        <CoursesLayoutItem c1="Web Development with Python Django"
                            c2="Graphics Designing"
                            c3="Video Editing & Animation"
                            c4="Digital Marketing"
                            c5="Google Ads (PPC)"
                            c6="Social Media Marketing"

                        />
                        <CoursesLayoutItem c1="SEO (Searching Engine Optimization)"
                            c2="WordPress Customization"
                            c3="Shopify with Digital Merketing"
                            c4="CCNA & Cyber Security"
                            c5="IELTS"
                            c6="FreeLacing(Become your Boss)"

                        />
                    </div>
                    {/* Component removed from here commented below */}
                </div>
            </div>
            {/* <!-- End Mega Menu  --> */}
        </li>
    )
}

export default CoursesLink





{/* <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav-quick-access">
                            <li><a href="#"><i className="feather-folder-minus"></i> Quick Start Guide</a></li>
                            <li><a href="#"><i className="feather-folder-minus"></i> For Open Source</a></li>
                            <li><a href="#"><i className="feather-folder-minus"></i> API Status</a></li>
                            <li><a href="#"><i className="feather-folder-minus"></i> Support</a></li>
                        </ul>
                    </div>
                </div> */}