import React from 'react'
import CareerItem from './CareerItem'

const CareerLink = () => {
  return (
    <li  className="has-dropdown has-menu-child-item">
        <a href="#">Career
            <i  className="feather-chevron-down"></i>
        </a>
        <ul  className="submenu">
            <CareerItem title="Web Development" />
            <CareerItem title="Digital Marketing" />
            <CareerItem title="SEO" />
            <CareerItem title="Item 4" />
        </ul>
    </li>
  )
}

export default CareerLink
