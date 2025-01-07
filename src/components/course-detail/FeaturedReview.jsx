import React from 'react'
import FeatReviewItem from './FeatReviewItem'
import FeatReviews from './FeatRevData'

const FeaturedReview = () => {
    return (
        <div className="about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more">
            <div className="section-title">
                <h4 className="rbt-title-style-3">Featured review</h4>
            </div>
            <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                {FeatReviews.map((featRevItem, index) => (
                    <FeatReviewItem featRevItem={featRevItem} key={index}/>
                ))}
            </div>
            <div className="rbt-show-more-btn">Show More</div>
        </div>
    )
}

export default FeaturedReview
