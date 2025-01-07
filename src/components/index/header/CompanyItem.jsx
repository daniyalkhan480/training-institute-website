import React from 'react'

const CompanyItem = ({c1,c2}) => {
  return (
    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
        {/* <h3 className="rbt-short-title">About Us</h3> */}
        <ul className="mega-menu-item">
            <li><a href="course-filter-one-toggle.html">  {c1}</a></li>
            <li><a href="course-filter-one-open.html">    {c2}</a></li>
        </ul>
    </div>
  )
}

export default CompanyItem
