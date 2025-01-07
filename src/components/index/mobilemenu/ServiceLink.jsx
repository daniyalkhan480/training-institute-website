import React from 'react'
import ServiceItem from './ServiceItem'

const ServiceLink = () => {
  return (
    <li  className="has-dropdown has-menu-child-item">
        <a href="#">Services
            <i  className="feather-chevron-down"></i>
        </a>
        <ul  className="submenu">
            <ServiceItem title="Web Development" />
            <ServiceItem title="Digital Marketing" />
        </ul>
    </li>
  )
}

export default ServiceLink
