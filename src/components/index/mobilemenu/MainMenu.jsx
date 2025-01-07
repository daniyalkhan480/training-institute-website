import React from 'react'
import HomeLink from './HomeLink'
import CoursesLink from './CoursesLink'
import ServiceLink from './ServiceLink'
import CareerLink from './CareerLink'
import BlogLink from './BlogLink'
import CompanyLink from './CompanyLink'

const MainMenu = () => {
  return (
    <nav className="mainmenu-nav">
        <ul className="mainmenu">
            <HomeLink />
            <CoursesLink />
            <ServiceLink />
            <CareerLink />
            <BlogLink />
            <CompanyLink />
        </ul>
    </nav>
  )
}

export default MainMenu
