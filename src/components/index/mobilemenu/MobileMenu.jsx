import React from 'react'
import InnerTop from './InnerTop'
import MobileMenuBottom from './MobileMenuBottom'
import MainMenu from './MainMenu'

const MobileMenu = () => {
  return (
    <div className="popup-mobile-menu">
        <div className="inner-wrapper">
            <InnerTop />
            <MainMenu />
            <MobileMenuBottom />
        </div>
    </div>
  )
}

export default MobileMenu
