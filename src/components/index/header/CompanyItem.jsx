import React from 'react'

const CompanyItem = ({ linkObj }) => {
  return (
    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
      <ul className="mega-menu-item">
        {linkObj.map((item, index) => (
          <li key={index}><a href={item.link}>  {item.title}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default CompanyItem
