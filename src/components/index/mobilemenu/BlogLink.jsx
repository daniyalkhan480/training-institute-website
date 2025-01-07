import React from 'react'
import BlogItem from './BlogItem';

const BlogLink = () => {

    const item1 = [
        { link: "blog-list.html", label: "Blog List" },
        { link: "blog.html", label: "Blog Grid" },
        { link: "blog-grid-minimal.html", label: "Blog Grid Minimal" },
        { link: "blog-with-sidebar.html", label: "Blog With Sidebar" },
        { link: "blog-details.html", label: "Blog Details" },
        { link: "post-format-standard.html", label: "Post Format Standard" },
        { link: "post-format-gallery.html", label: "Post Format Gallery" }
    ];

    const item2 = [
        { link: "post-format-quote.html", label: "Post Format Quote" },
        { link: "post-format-audio.html", label: "Post Format Audio" },
        { link: "post-format-video.html", label: "Post Format Video" },
        { link: "#", label: "Media Under Title", badge: "Coming" },
        { link: "#", label: "Sticky Sidebar", badge: "Coming" },
        { link: "#", label: "Auto Masonry", badge: "Coming" },
        { link: "#", label: "Meta Overlaid", badge: "Coming" }
    ];

    const menuItems = [
        { link: "blog-list.html", label: "Blog List" },
        { link: "blog.html", label: "Blog Grid" },
        { link: "blog-grid-minimal.html", label: "Blog Grid Minimal" },
        { link: "blog-with-sidebar.html", label: "Blog With Sidebar" },
        { link: "blog-details.html", label: "Blog Details" },
        { link: "post-format-standard.html", label: "Post Format Standard" },
        { link: "post-format-gallery.html", label: "Post Format Gallery" }
    ];



  return (
    <li className="with-megamenu has-menu-child-item position-static">
        <a href="#">Blog <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu grid-item-3">
            <div className="wrapper">
                <div className="row row--15">
                    <BlogItem title="Blog Styles"  menuItems={item1}/>
                    <BlogItem title="Get Started" menuItems={item2}/>


                    {/* <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <div className="rbt-ads-wrapper">
                            <a className="d-block" href="#"><img src="assets/images/service/mobile-cat.jpg" alt="Education Images"/></a>
                        </div>
                    </div> */}



                </div>
            </div>
        </div>
    </li>
  )
}

export default BlogLink
