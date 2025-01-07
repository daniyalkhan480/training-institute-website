import React from 'react'


const UpHeaderItems = ({title}) => {
  return (
    <li className="has-dropdown has-menu-child-item">
    <a href="#" style={{color : "#fff" , height : "50px"}} className='rbt-btn-link .up-header-a' id='upHeadA'>{title}
        {/* <i className="feather-chevron-down"></i> */}
    </a>
    <ul className="submenu">

      <li className="has-dropdown"><a href="#">{title}</a></li>  
      <li className="has-dropdown"><a href="#">{title}</a></li>  
      <li className="has-dropdown"><a href="#">{title}</a></li>  
      <li className="has-dropdown"><a href="#">{title}</a></li>   
    </ul>
</li>
  )
}

export default UpHeaderItems
