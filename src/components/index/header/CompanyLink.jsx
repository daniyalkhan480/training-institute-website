import React from 'react'
import CompanyItem from './CompanyItem'

const linkObj = [
  {
    title: "Our Team",
    link: "#"
  },
  {
    title: "Portfolio",
    link: "#"
  },
  {
    title: "About Us",
    link: "#"
  },
  {
    title: "Contact Us",
    link: "#"
  },
  {
    title: "Testimonials",
    link: "#"
  },
  {
    title: "Item",
    link: "#"
  }
];

// Calculate the midpoint of the array
const halfLength = Math.ceil(linkObj.length / 2);

// Split the array into two halves
const firstHalf = linkObj.slice(0, halfLength);
const secondHalf = linkObj.slice(halfLength);

const CompanyLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item">
      <a href="#">Company <i className="feather-chevron-down"></i></a>
      <div className="rbt-megamenu grid-item-7">
        <div className="wrapper">
          <div className="row row--15 single-dropdown-menu-presentation">
            {/* <h3 className="rbt-short-title text-center">About Us</h3> */}

            <CompanyItem linkObj={firstHalf}/>
            <CompanyItem linkObj={secondHalf}/>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CompanyLink



