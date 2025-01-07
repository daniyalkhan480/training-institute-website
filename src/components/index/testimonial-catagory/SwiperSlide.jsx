import React from 'react'

const SwiperSlide = () => {
    return (
        <div className="swiper-slide">
            <div className="rbt-testimonial-box no-box-shadow bg-gradient-7 text-white">
                <div className="inner" style={{width: '100%'}}>
                    <div className="clint-info-wrapper">
                        <div className="thumb">
                            <img src="assets/images/testimonial/client-01.png" alt="Clint Images" />
                        </div>
                        <div className="client-info">
                            <h5 className="title">Martha Maldonado</h5>
                            <span className="designation">Executive Chairman <i>@ Google</i></span>
                        </div>
                    </div>
                    <div className="description">
                        <p className="subtitle-3">After the launch, vulputate at sapien sit amet,
                            auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                            velit. Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the</p>
                        <div className="rating mt--20">
                            <a href="#"><i className="fa fa-star"></i></a>
                            <a href="#"><i className="fa fa-star"></i></a>
                            <a href="#"><i className="fa fa-star"></i></a>
                            <a href="#"><i className="fa fa-star"></i></a>
                            <a href="#"><i className="fa fa-star"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwiperSlide
