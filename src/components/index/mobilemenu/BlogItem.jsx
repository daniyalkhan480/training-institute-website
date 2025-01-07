import React from 'react'

const BlogItem = ({title,menuItems}) => {
  return (
    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
        <h3 className="rbt-short-title">{title}</h3>
        <ul className="mega-menu-item">
            {menuItems.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.label}  {item.badge && <span className="rbt-badge-card">Coming</span>}</a>
                </li>
            ))}
        </ul>
    </div>
)
}

export default BlogItem
