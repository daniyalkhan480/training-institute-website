import React from 'react'
import BannerCard from './BannerCard'

const Banner = () => {
    return (
        <div className="rbt-banner-area rbt-banner-2 header-transperent-spacer">
            <div className="wrapper">
                <div className="container">

                    {/* Body Badge */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-content text-center">
                                <div className="inner">
                                    <div className="rbt-new-badge rbt-new-badge-one mb--30">
                                        <span className="rbt-new-badge-icon">🏆</span> The Leader in Online Learning
                                    </div>
                                    <h1 className="title">We teaching, educate and <span className="theme-gradient">build the
                                        future</span> of online learning</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Cards */}

                    <div className="swiper service-item-3-activation  rbt-arrow-between gutter-swiper-30">

                        <div className="swiper-wrapper banner" >
                            {/* cards Components */}

                            <BannerCard label="React" num={1} />
                            <BannerCard label="English" num={2} />
                            <BannerCard label="Education" num={2} />

                        </div>



                        <div className="rbt-swiper-arrow rbt-arrow-left">
                            <div className="custom-overfolow">
                                <i className="rbt-icon feather-arrow-left"></i>
                                <i className="rbt-icon-top feather-arrow-left"></i>
                            </div>
                        </div>

                        <div className="rbt-swiper-arrow rbt-arrow-right">
                            <div className="custom-overfolow">
                                <i className="rbt-icon feather-arrow-right"></i>
                                <i className="rbt-icon-top feather-arrow-right"></i>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Banner
