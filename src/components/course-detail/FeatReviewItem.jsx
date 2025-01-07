import React from 'react'

const FeatReviewItem = ({featRevItem}) => {
    return (
        <div className="rbt-course-review about-author">
            <div className="media">
                <div className="thumbnail">
                    <a href="#">
                        <img src={featRevItem.imageUrl} alt="Author Images" />
                    </a>
                </div>
                <div className="media-body">
                    <div className="author-info">
                        <h5 className="title">
                            <a className="hover-flip-item-wrapper" href="#">
                                {featRevItem.name}
                            </a>
                        </h5>
                        <div className="rating">
                            {Array.from({ length: featRevItem.rating }, (_, index) => (
                                <a href="#" key={index}><i className="fa fa-star"></i></a>
                            ))}
                        </div>
                    </div>
                    <div className="content">
                        <p className="description">{featRevItem.description}</p>
                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                            <li><a href="#">
                                <i className="feather-thumbs-up"></i>
                            </a>
                            </li>
                            <li><a href="#">
                                <i className="feather-thumbs-down"></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatReviewItem
