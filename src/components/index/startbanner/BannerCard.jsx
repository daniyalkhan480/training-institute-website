import React from 'react'

const BannerCard = ({label,num}) => {
  return (
    <div className="swiper-slide">
        <div className="single-slide">
            <div className={`rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-${num}`}>
                <div className="inner">
                    <div className="content">
                        <h4 className="title" style={{color : "#fff"}}><a href="#">{label}</a></h4>
                        <p>{label} Js dolor sit, amet consectetur.</p>
                        <a className="transparent-button" href="#" style={{color : "#000"}}>Learn More<i></i></a>
                    </div>
                    <div className="thumbnail">
                        <img src="assets/images/service/service-06.png" alt="Education Images"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerCard
