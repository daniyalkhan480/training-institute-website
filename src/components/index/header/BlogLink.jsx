import React from 'react'
import BlogItem from './BlogItem'

const BlogLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item position-static">
        <a href="#">Blog <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu grid-item-3">
            <div className="wrapper">
                <div className="row row--15">
                    <BlogItem title="Blog Styles" />
                    <BlogItem title="Get Started" />

                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <div className="rbt-ads-wrapper">
                            <a className="d-block" href="#"><img src="/assets/images/service/mobile-cat.jpg" alt="Education Images"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default BlogLink
