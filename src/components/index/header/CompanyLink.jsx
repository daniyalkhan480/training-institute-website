import React from 'react'
import CompanyItem from './CompanyItem'

const CompanyLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item">
      <a href="#">Company <i className="feather-chevron-down"></i></a>
      <div className="rbt-megamenu grid-item-7">
        <div className="wrapper">
          <div className="row row--15 single-dropdown-menu-presentation">
            <h3 className="rbt-short-title text-center">About Us</h3>

            <CompanyItem c1="Our Team"
              c2="Contact Us"
              // c3="Portfolio"
              // c4="Testimonials"

            />
            <CompanyItem  c1="Portfolio"
                          c2="Testimonials"
                    />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CompanyLink



