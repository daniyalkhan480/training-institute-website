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
                    <h4 className="rbt-card-title text-center"><a href={cardInfo.link}>{cardInfo.title}</a>
                    </h4>

                    <ul className="rbt-meta d-flex justify-content-center">
                        <li><i className="fa-solid fa-clock"></i>{cardInfo.duration}</li>
                        <li><i className="feather-users"></i>{cardInfo.paced}</li>
                    </ul>

                    <div className="rbt-price d-flex justify-content-center">
                        <span className="current-price">{cardInfo.currentPrice}</span>
                        <span className="off-price">{cardInfo.offPrice}</span>
                    </div>

                    <div className="d-grid gap-2 col-11 mx-auto mt-3">
                        <button className="btn btn-outline-dark my-2" type="button" style={{ height: "40px", fontSize: "1.5rem", fontWeight: "600" }}>Download Brochure</button>
                    </div>

                    <div className="rbt-card-bottom d-flex justify-content-center mt-3">

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

