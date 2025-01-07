import React from 'react'

const Instructor = ({item}) => {
    return (
        <div className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30" id="intructor">
            <div className="about-author border-0 pb--0 pt--0">
                <div className="section-title mb--30">
                    <h4 className="rbt-title-style-3">Instructor</h4>
                </div>
                <div className="media align-items-center">
                    <div className="thumbnail">
                        <a href="#">
                            <img src="assets/images/testimonial/testimonial-7.jpg" alt="Author Images" />
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="author-info">
                            <h5 className="title">
                                <a className="hover-flip-item-wrapper" href={item.imageUrl}>{item.name}</a>
                            </h5>
                            <span className="b3 subtitle">{item.designation}</span>
                            <ul className="rbt-meta mb--20 mt--10">
                                <li><i className="fa fa-star color-warning"></i>{item.rating} <span className="rbt-badge-5 ml--5">{item.review}</span></li>
                                <li><i className="feather-users"></i>{item.student}</li>
                                <li><a href="#"><i className="feather-video"></i>{item.course}</a></li>
                            </ul>
                        </div>
                        <div className="content">
                            <p className="description">{item.description}</p>

                            <ul className="social-icon social-default icon-naked justify-content-start">
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor
