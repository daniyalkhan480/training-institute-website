import React from 'react'

const BannerCard = ({label,num,text}) => {
  return (
    <div className="swiper-slide col-lg-3" >
        {/* <div className="single-slide"> */}
            <div className={`rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-${num}`} style={{height : "250px"}}>
                    <div >
                        <h4 className="title text-center" style={{color : "#fff"}}><a href="#">{label}</a></h4>
                        <p className='text-center fs-1'>{text}</p>
                        {/* <a className="transparent-button" href="#" style={{color : "#000"}}>Learn More<i></i></a> */}
                    </div>
                {/* <div className="inner"> */}
                    {/* <div className="thumbnail">
                        <img src="assets/images/service/service-06.png" alt="Education Images" style={{width : "100px", height : "150px"}}/>
                    </div> */}
                {/* </div> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default BannerCard
