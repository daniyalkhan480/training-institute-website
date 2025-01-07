import React from 'react'

const CourseItem = ({title,item1,item2,item3,item4}) => {
  return (
    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
        <h3 className="rbt-short-title">{title}</h3>
        <ul className="mega-menu-item">
            <li><a href="course-filter-one-toggle.html">{item1}</a></li>
            <li><a href="course-filter-one-open.html">{item2}</a></li>
            <li><a href="course-filter-two-toggle.html">{item3}</a></li>
            {/* <li><a href="course-filter-two-open.html">{item4}</a></li>
            <li><a href="course-with-tab.html">{item4}</a></li>
            <li><a href="course-with-tab-two.html">{item4}</a></li> */}
        </ul>
    </div>
  )
}

export default CourseItem
