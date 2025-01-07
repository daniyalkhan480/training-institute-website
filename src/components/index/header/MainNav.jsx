import React from 'react'
import CoursesLink from './CoursesLink'
import HomeLink from './HomeLink'
import ServicesLink from './ServicesLink'
import CareerLink from './CareerLink'
import BlogLink from './BlogLink'
import CompanyLink from './CompanyLink'

const MainNav = () => {
  return (
    <div className="rbt-main-navigation d-none d-xl-block">
    <nav className="mainmenu-nav">
        <ul className="mainmenu">
            {/* <HomeLink /> */}
            <CompanyLink /> 
            <CoursesLink />
            <ServicesLink />
            {/* <CareerLink />
            <BlogLink /> */}
        </ul>    
    </nav>    
</div>    
  )
}

export default MainNav
