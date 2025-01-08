import React from 'react'

const courseSidebarItem = {
    aLink: "https://www.youtube.com/watch?v=nA1Aqp0sPQo",
    videoUrl: "assets/images/others/video-01.jpg",
    title: "Course Sidebar",
    description: "Course Sidebar",
    price: "$60.99",
    discountPrice: "$84.99",
    discountTime: "3 days left!",
    moneyBack: "30-Day Money-Back Guarantee",
    instructor: "John Doe",
    showMore: [
        { label: "Start Date", value: "01/01/2023" }, // Replace with actual data
        { label: "Enrolled", value: "1500" },
        { label: "Lectures", value: "30" },
        { label: "Skill Level", value: "Intermediate" },
        { label: "Language", value: "English" },
        { label: "Quizzes", value: "5" },
        { label: "Certificate", value: "Yes" },
        { label: "Pass Percentage", value: "70%" }
    ]
}

const VideoBar = () => {
    return (
        // < div className=" rbt-shadow-box rbt-gradient-border" >
            <div className="inner rbt-shadow-box rbt-gradient-border">

                {/* <!-- Start Viedo Wrapper  --> */}
                <a className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15" href={courseSidebarItem.aLink}>
                    <div className="video-content">
                        <img className="w-100 rbt-radius" src={courseSidebarItem.videoUrl} alt="Video Images" />
                        <div className="position-to-top">
                            <span className="rbt-btn rounded-player-2 with-animation">
                                <span className="play-icon"></span>
                            </span>
                        </div>
                        <span className="play-view-text d-block color-white"><i className="feather-eye"></i> Preview Our Institute</span>
                    </div>
                </a>
                {/* <!-- End Viedo Wrapper  --> */}

                {/* <div className="content-item-content">
                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                        <div className="rbt-price">
                            <span className="current-price">{courseSidebarItem.price}</span>
                            <span className="off-price">{courseSidebarItem.discountPrice}</span>
                        </div>
                        <div className="discount-time">
                            <span className="rbt-badge color-danger bg-color-danger-opacity"><i
                                className="feather-clock"></i> {courseSidebarItem.discountTime}</span>
                        </div>
                    </div>

                    <div className="add-to-card-button mt--15">
                        <a className="rbt-btn btn-gradient icon-hover w-100 d-block text-center" href="#">
                            <span className="btn-text">Enroll Now</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </a>
                    </div>

                    <div className="buy-now-btn mt--15">
                        <a className="rbt-btn btn-border icon-hover w-100 d-block text-center" href="#">
                            <span className="btn-text">Arrange Demo Class</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </a>
                    </div>

                    <span className="subtitle"><i className="feather-rotate-ccw"></i> {courseSidebarItem.moneyBack}</span>


                    <div className="rbt-widget-details has-show-more">
                        <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">

                            {courseSidebarItem.showMore.map((item, index) => (
                                <li key={index}>
                                    <span>{item.label}</span>
                                    <span className="rbt-feature-value rbt-badge-5">{item.value}</span>
                                </li>
                            ))}
                            
                        </ul>
                        <div className="rbt-show-more-btn">Show More</div>
                    </div>

                    <div className="social-share-wrapper mt--30 text-center">
                        <div className="rbt-post-share d-flex align-items-center justify-content-center">
                            <ul className="social-icon social-default transparent-with-border justify-content-center">
                                <li><a href="https://www.facebook.com/">
                                    <i className="feather-facebook"></i>
                                </a>
                                </li>
                                <li><a href="https://www.twitter.com">
                                    <i className="feather-twitter"></i>
                                </a>
                                </li>
                                <li><a href="https://www.instagram.com/">
                                    <i className="feather-instagram"></i>
                                </a>
                                </li>
                                <li><a href="https://www.linkdin.com/">
                                    <i className="feather-linkedin"></i>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <hr className="mt--20" />
                        <div className="contact-with-us text-center">
                            <p>For details about the course</p>
                            <p className="rbt-badge-2 mt--10 justify-content-center w-100"><i className="feather-phone mr--5"></i> Call Us: <a href="#"><strong>+444 555 666 777</strong></a></p>
                        </div>
                    </div>
                </div> */}
            </div>
        // </div >
    )
}

export default VideoBar
