import React from 'react'

const BlogItem = ({title}) => {
  return (
    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
        <h3 className="rbt-short-title">{title}</h3>
        <ul className="mega-menu-item">
            <li><a href="blog-list.html">Blog List</a></li>
            <li><a href="blog.html">Blog Grid</a></li>
            <li><a href="blog-grid-minimal.html">Blog Grid Minimal</a></li>
            <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
            <li><a href="blog-details.html">Blog Details</a></li>
            <li><a href="post-format-standard.html">Post Format Standard</a></li>
            <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
        </ul>
    </div>
)
}

export default BlogItem
