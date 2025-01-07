import React from 'react'
import UpHeaderItems from './UpHeaderItems'

const UpperHeader = () => {
  return (
    <div className="rbt-main-navigation d-none d-xl-block" style={{backgroundColor : "#ff0000a1"}}> 
      <nav className="mainmenu-nav">
          <ul className="mainmenu" style={{height :"70px"}}>
              <UpHeaderItems title="Courses Schedule"/>
              <UpHeaderItems title="Pay Now"/>
              <UpHeaderItems title="Admissions"/>
              <UpHeaderItems title="Upcoming Workshops"/>
              <UpHeaderItems title="Contact"/>
              <UpHeaderItems title="Company Email"/>
              <UpHeaderItems title="Schedule a Free Demo"/>
              <UpHeaderItems title="Inquiry Form"/>
          </ul>    
      </nav>    
    </div>    
  )
}

export default UpperHeader
