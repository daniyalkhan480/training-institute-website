import React from 'react'
import BannerCard from './BannerCard'
import VideoBar from './VideoBar'

const Banner = () => {
    return (
        <div className="rbt-banner-area rbt-banner-2 header-transperent-spacer">
            <div className="wrapper">
                <div className="container">

                    {/* Body Badge */}
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <div className="banner-content text-center">
                                <div className="inner">
                                    <div className='row'>
                                        <div className='col-lg-8'>
                                            <div className="rbt-new-badge rbt-new-badge-one mb--30">
                                                <span className="rbt-new-badge-icon">🏆</span> Planning a career?
                                            </div>
                                            <h1 className="title">Learn from <span className="theme-gradient">industry experts</span> with us </h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                                            <div className="buttons d-flex justify-content-center">
                                                <div className="rbt-btn-wrapper d-none d-xl-block mx-5">
                                                    <a className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href="#">
                                                        <span data-text="Free Demo">Free Demo</span>
                                                    </a>
                                                </div>
                                                <div className="rbt-btn-wrapper d-none d-xl-block">
                                                    <a className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href="#">
                                                        <span data-text="Download Brochure">Download Brochure</span>
                                                        <i className="feather-arrow-down"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            New Items
                                            <VideoBar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Cards */}

                    {/* <div className="swiper service-item-3-activation  rbt-arrow-between gutter-swiper-30">

                        <div className="row swiper-wrapper banner" > */}
                    {/* cards Components */}

                    {/* <BannerCard label="Step 1" text="Counselling The Institute" num={1} />
                            <BannerCard label="Step 2" text="Get Admission" num={1} />
                            <BannerCard label="Step 3" text="Physical Classes" num={1} />
                            <BannerCard label="Step 4" text="Become Expert" num={1} /> */}
                    {/* <BannerCard label="Step 5" num={1} />
                            <BannerCard label="Step 6" num={1} /> */}

                    {/* </div> */}


                    {/* 
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
                        </div> */}


                    {/* </div> */}


                </div>
            </div>
        </div>
    )
}

export default Banner
