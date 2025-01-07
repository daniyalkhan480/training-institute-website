import React from 'react'
import ServicesLinkItem from './ServicesLinkItem'

const ServicesLink = () => {
  return (
    <li className="has-dropdown has-menu-child-item">
    <a href="#">Services
        <i className="feather-chevron-down"></i>
    </a>
    <ul className="submenu">
        
        <ServicesLinkItem title="Web Development" />
        <ServicesLinkItem title="Graphic Designing" />
        <ServicesLinkItem title="Video Editing & Animation" />
        <ServicesLinkItem title="Digital Marketing" />

    </ul>
</li>
  )
}

export default ServicesLink
