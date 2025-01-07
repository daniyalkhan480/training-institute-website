import React from 'react'
import HeaderLeft from './HeaderLeft'
import MainNav from './MainNav'
import HeaderRight from './HeaderRight'
import UpperHeader from './UpperHeader'
const Navbar = () => {
  return (
    <div className="rbt-header-wrapper  @@sticky">
        <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
                <HeaderLeft />
                <MainNav />
                {/* <UpperHeader /> */}
                <HeaderRight />
            </div>
        </div>
    </div>
  )
}

export default Navbar
