import React from 'react'
import CourseItem from './CourseItem'

const CoursesLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item">
        <a href="#">Courses <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu grid-item-2">
            <div className="wrapper">
                {/* Wrapper Child One Start */}

                {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="mega-top-banner">
                            <div className="content">
                                <h4 className="title">Developer hub</h4>
                                <p className="description">Start building fast, with code samples, key resources and more.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Wrapper Child One End */}

                {/* Wrapper Child Two Start */}
                <div className="row row--15">
                    <CourseItem title="Web Development" item1="item" item2="item" item3="item" item4="item" />
                    <CourseItem title="Digital Marketing" item1="item" item2="item" item3="item" item4="item" />
                </div>    
                {/* Wrapper Child Two End */}

                {/* Wrapper Child Thre Start */}
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
                {/* Wrapper Child Thre End */}


                {/* Wrapper Child Thre Start */}

                {/* Wrapper Child Thre End */}
            </div>
        </div>
    </li>
  )
}

export default CoursesLink
