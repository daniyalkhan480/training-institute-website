import React from 'react'

const reviewItem = {
    title: "Review",
    subTitle: "Course Rating",
    rating: {
        Obtained: 4.5,
        Total: 5,
        rating1: {
            percentage: 1,
            rating: 5
        },
        rating2: {
            percentage: 1,
            rating: 4
        },
        rating3: {
            percentage: 6,
            rating: 3
        },
        rating4: {
            percentage: 29,
            rating: 2
        },
        rating5: {
            percentage: 63,
            rating: 1
        }
    }
}
const Review = () => {
    return (
        // < !--Start Edu Review List-- >
        <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
            <div className="course-content">
                <div className="section-title">
                    <h4 className="rbt-title-style-3">{reviewItem.title}</h4>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-3">
                        <div className="rating-box">
                            <div className="rating-number">{reviewItem.rating.Obtained}</div>
                            <div className="rating">

                                {/* Repaeting rating stars */}
                                {Array.from({ length: reviewItem.rating.Obtained }).map((_, index) => (
                                    <svg
                                        key={index} // Ensure each SVG has a unique key
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                ))}

                            </div>
                            <span className="sub-title">{reviewItem.subTitle}</span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="review-wrapper">
                            {/* Repaeting rating stars */}

                            {Array.from({ length: reviewItem.rating.Total }).map((_, index) => {
                                const ratingObj = reviewItem.rating[`rating${reviewItem.rating.Total-index}`];
                                const ratingValue = ratingObj.rating; // Calculate the current rating value
                                return (
                                    <div key={ratingValue} className="single-progress-bar">
                                        <div className="rating-text">
                                            {/* Render stars based on the current rating value */}
                                            {Array.from({ length: ratingValue }).map((_, starIndex) => (
                                                <svg
                                                    key={starIndex}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${ratingObj.percentage}%` }} // Example width calculation
                                                aria-valuenow={ratingObj.percentage}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <span className="value-text">{ratingObj.percentage}%</span> {/* Example percentage text */}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!--End Ed
    )
}

export default Review
