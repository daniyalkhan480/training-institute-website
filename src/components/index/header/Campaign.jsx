import React from 'react'
import { Link } from 'react-router-dom'
const Campaign = () => {
    return (
        <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1">
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner justify-content-between">
                                <div className="inner justify-content-between">

                                    <div className="content mx-3">
                                        <a className="rbt-btn-link color-white" href="#">
                                            <span>+92304-4205067
                                                {/* <i className="feather-arrow-right"></i> */}
                                            </span>
                                        </a>
                                    </div>
                                    <div className="content mx-3">
                                        <a className="rbt-btn-link color-white" href="#">
                                            <span>info@tecnsol.com </span>
                                            {/* <i className="feather-arrow-right"></i> */}
                                        </a>
                                    </div>
                                    <div className="content mx-3">
                                        <a className="rbt-btn-link color-white" href="#">
                                            <span>Inquiry Form </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="inner justify-content-between">
                                    <div className="content mx-3">
                                        <Link className="rbt-btn-link color-white" to="/up-batches">
                                            <span>Upcoming Batches</span>
                                        </Link>
                                    </div>
                                    <div className="content mx-3">
                                        <a className="rbt-btn-link color-white" href="#">
                                            <span>Pay Now</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="content">
                                    <span className="rbt-badge variation-02 color-white radius-round" style={{ backgroundColor: "#ff0000" }}>Limited Time Offer</span>
                                    <span className="news-text color-white-off"><img src="assets/images/icons/hand-emojji.svg" alt="Hand Emojji Images" /> Intro price. Get Histudy for Big Sale -95% off.</span>
                                </div> */}
                                {/* <div className="right-button">
                                    <a className="rbt-btn-link color-white" href="https://themeforest.net/checkout/from_item/42846507?license=regular">
                                        <span>Purchase Now <i className="feather-arrow-right"></i></span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="icon-close position-right">
                <button className="rbt-round-btn btn-white-off bgsection-activation">
                    <i className="feather-x"></i>
                </button>
            </div> */}
        </div>
    )
}

export default Campaign
