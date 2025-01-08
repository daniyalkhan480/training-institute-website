import React from 'react'

const CoursesLayoutItem = ({c1,c2,c3,c4,c5,c6}) => {
  return (
    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
        <ul className="mega-menu-item">
            <li><a href="course-filter-one-toggle.html">  {c1}</a></li>
            <li><a href="course-filter-one-open.html">    {c2}</a></li>
            <li><a href="course-filter-two-toggle.html">  {c3}</a></li>
            <li><a href="course-filter-two-open.html">    {c4}</a></li>
            <li><a href="course-with-tab.html">           {c5}</a></li>
            <li><a href="course-with-tab-two.html">       {c6}</a></li>
        </ul>
    </div>
  )
}

export default CoursesLayoutItem
