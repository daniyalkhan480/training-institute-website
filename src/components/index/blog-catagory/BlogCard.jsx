import React from 'react'

const BlogCard = ({cardInfo}) => {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--30" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div className={`rbt-card variation-02 ${cardInfo.height ? cardInfo.height : ""} rbt-hover`}>
                <div className="rbt-card-img">
                    <a href="blog-details.html">
                        <img src={cardInfo.imgUrl} alt="Card image"/> </a>
                </div>
                <div className="rbt-card-body">
                    {cardInfo.pText && 
                        <>
                            <h3 className="rbt-card-title"><a href="blog-details.html">{cardInfo.title}</a></h3>
                            <p className="rbt-card-text">{cardInfo.pText}</p>
                        </>
                    }
                    {
                        !cardInfo.pText && 
                            <h5 className="rbt-card-title"><a href="blog-details.html">{cardInfo.title}</a></h5>
                    }
                    <div className="rbt-card-bottom">
                        <a className="transparent-button" href="blog-details.html">{cardInfo.aText}<i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" ></g></svg></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
