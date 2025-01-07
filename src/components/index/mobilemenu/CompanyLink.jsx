import React from 'react'
import CompanyItem from './CompanyItem'

const CoursesLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item">
        <a href="#">Company <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu grid-item-2">
            <div className="wrapper">

                {/* Wrapper Child Two Start */}
                <div className="row row--15">
                    <CompanyItem title="About Us" item1="Our Team" item2="Portfolio" item3="Testimonials" item4="Contact Us" />
                </div>    
                {/* Wrapper Child Two End */}

            </div>
        </div>
    </li>
  )
}

export default CoursesLink
