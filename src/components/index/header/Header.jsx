import React from 'react'
import Campaign from './Campaign'
import Navbar from './Navbar'
import UpperHeader from './UpperHeader'

const Header = () => {
  return (
    <header className="rbt-header rbt-header-default rbt-transparent-header">
        <div className="rbt-sticky-placeholder"></div>
        <Campaign />
        {/* <UpperHeader /> */}
        <Navbar />
    </header>
  )
}

export default Header
