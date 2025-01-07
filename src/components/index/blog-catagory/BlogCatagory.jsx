import React from 'react'
import BlogCard from './BlogCard'

const cardInfo =[
    {
        height : "height-330",
        imgUrl : "assets/images/blog/blog-card-01.jpg",
        title : "React",
        pText : "It is a long established fact that a reader.",
        aText : "Learn More"
    },
    {
        imgUrl : "assets/images/blog/blog-card-02.jpg",
        title : "Why Is Education So Famous?",
        aText : "Read Article"
    },
    {
        imgUrl : "assets/images/blog/blog-card-03.jpg",
        title : "Difficult Things About Education.",
        aText : "Read Article"
    },
    {
        imgUrl : "assets/images/blog/blog-card-04.jpg",
        title : "Education Is So Famous, But Why?",
        aText : "Read Article"
    },
   
];

const BlogCatagory = () => {
    return (
        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-white">
            <div className="container">

                {/* Bolg Header */}
                <div className="row g-5 align-items-center mb--30">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="section-title">
                            <span className="subtitle bg-pink-opacity">Blog Post</span>
                            <h2 className="title">Post Popular Post.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="read-more-btn text-start text-md-end">
                            <a className="rbt-btn btn-gradient hover-icon-reverse" href="blog.html">
                                <div className="icon-reverse-wrapper">
                                    <span className="btn-text">See All Articles</span>
                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Card */}

                <div className="row row--15">

                    <div>

                    <BlogCard  cardInfo={cardInfo[0]}/>
                    <BlogCard  cardInfo={cardInfo[1]}/>
                    <BlogCard  cardInfo={cardInfo[2]}/>
                    <BlogCard  cardInfo={cardInfo[3]}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogCatagory
