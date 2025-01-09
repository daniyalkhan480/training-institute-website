import React from 'react'
import ServicesLinkItem from './ServicesLinkItem'

const servicesLinkObj = [
  { title: "Web Development" ,
    link : "#"
  },
  { title: "Graphic Designing" ,
    link : "#"  
  },
  { title: "Video Editing & Animation" ,
    link : "#"  
  },
  { title: "Digital Marketing",
    link : "#"
   }
];

const ServicesLink = () => {
  return (
    <li className="has-dropdown has-menu-child-item">
      <a href="#">Services
        <i className="feather-chevron-down"></i>
      </a>
      <ul className="submenu">

        {servicesLinkObj.map((service, index) => (
                <li><a href={service.link}>{service.title}</a></li>
        ))}

      </ul>
    </li>
  )
}

export default ServicesLink
