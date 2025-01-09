import React from 'react'

const CardItem = ({ cardInfo }) => {
    return (
        <div className={` ${cardInfo.cardList2 || cardInfo.card2 ? "col-lg-3 col-md-6 col-sm-6 col-12" : "col-lg-6 col-md-6 col-sm-6 col-12"}`}>
            <div className={`rbt-card variation-01 rbt-hover `}>

                <div className="rbt-card-img">
                    <a href={cardInfo.link}>
                        <img src={cardInfo.imageUrl} alt="Card image" />
                    </a>
                </div>
                <div className="rbt-card-body">
                    {/* <div className="rbt-card-top">
                        <div className="rbt-review">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="rating-count"> ({cardInfo.reviews})</span>
                        </div>
                        <div className="rbt-bookmark-btn">
                            <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                className="feather-bookmark"></i></a>
                        </div>
                    </div> */}

                    <h4 className="rbt-card-title text-center"><a href={cardInfo.link}>{cardInfo.title}</a>
                    </h4>

                    <ul className="rbt-meta d-flex justify-content-center">
                        <li><i className="fa-solid fa-clock"></i>{cardInfo.duration}</li>
                        <li><i className="feather-users"></i>{cardInfo.paced}</li>
                    </ul>

                    {/* <p className="rbt-card-text">{cardInfo.pText}</p> */}
                    <div className="rbt-price d-flex justify-content-center">
                        <span className="current-price">{cardInfo.currentPrice}</span>
                        <span className="off-price">{cardInfo.offPrice}</span>
                    </div>
                    {/* <div className="rbt-author-meta mb--10">
                        <div className="rbt-avater">
                            <a href={cardInfo.authorLink}>
                                <img src={cardInfo.authorImageUrl} alt="Sophia Jaymes" />
                            </a>
                        </div>
                        <div className="rbt-author-info">
                            By <a href={cardInfo.authorLink}>{cardInfo.author}</a> In <a href="#">{cardInfo.authorCategory}</a>
                        </div>
                    </div> */}
                    <div className="d-grid gap-2 col-11 mx-auto mt-3">
                        <button className="btn btn-outline-dark my-2" type="button" style={{ height: "40px",fontSize: "1.5rem", fontWeight: "600" }}>Download Brochure</button>
                        {/* <button className="btn btn-outline-danger" type="button" style={{ height: "40px",fontSize: "2rem", fontWeight: "600" }}>Button</button> */}
                    </div>
                    
                    <div className="rbt-card-bottom d-flex justify-content-center mt-3">
                        {/* <div className="rbt-price">
                            <span className="current-price">{cardInfo.currentPrice}</span>
                            <span className="off-price">{cardInfo.offPrice}</span>
                        </div> */}
                        <a className="rbt-btn-link" href={cardInfo.link}>View Course<i className="feather-arrow-right"></i>
                        </a>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem




// const cardInfo = {
//     imageUrl : "assets/images/course/course-list-01.jpg",
//     title : "React Front To Back",
//     rating : "4.5",
//     reviews : "15 Reviews",
//     bookmark : "Bookmark",
//     author : "Angela",
//     category : "Development",
//     currentPrice : "$60",
//     offPrice : "$120",
//     link : "course-details.html",
//     lessons : "12 Lessons",
//     students : "50 Students",
//     pText : "It is a long established fact that a reader will be distracted.",
//     authorImageUrl : "assets/images/client/avatar-02.png",
//     authorLink : "profile.html",
//     authorCategory : "Development"
// };