import React from 'react'

const courseInfo = {
    listTitle: "Web Development",
    title: "The Complete Histudy 2022: From Zero to Expert!",
    description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
    imageUrl: "assets/images/bg/bg-image-10.jpg",/*  change this image color to red */
    author: "Angela",
    authorImage: "assets/images/client/avatar-02.png",
    authorLink: "profile.html",
    authorCategory: "Development",
    rating: "4.8",
    totalRating: "215,475 rating",
    totalStudent: "616,029 students",
    lastUpdated: "12/2024",
    language: "English",
    certification: "Certified Course",
    instructor: "Angela",
    instructorImage: "assets/images/client/avatar-02.png",
    instructorLink: "profile.html",
    instructorCategory: "Development",
}

const BreadCrumbArea = () => {
    return (
        // < !--Start breadcrumb Area-- >
        <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <div className="breadcrumb-inner">
                <img src={courseInfo.imageUrl} alt="Education Images" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="content text-start">
                            <ul className="page-list">
                                <li className="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                                <li>
                                    <div className="icon-right"><i className="feather-chevron-right"></i></div>
                                </li>
                                <li className="rbt-breadcrumb-item active">{courseInfo.listTitle}</li>
                            </ul>
                            <h2 className="title">{courseInfo.title}</h2>
                            <p className="description">{courseInfo.description}</p>

                            <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">

                                <div className="feature-sin best-seller-badge">
                                    <span className="rbt-badge-2">
                                        <span className="image"><img src="assets/images/icons/card-icon-1.png"
                                            alt="Best Seller Icon" /></span> Bestseller
                                    </span>
                                </div>

                                <div className="feature-sin rating">
                                    <a href="#">{courseInfo.rating}</a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                    <a href="#"><i className="fa fa-star"></i></a>
                                </div>

                                <div className="feature-sin total-rating">
                                        <a className="rbt-badge-4" href="#">{courseInfo.totalRating}</a>
                                </div>

                                <div className="feature-sin total-student">
                                    <span>{courseInfo.totalStudent}</span>
                                </div>

                            </div>

                            <div className="rbt-author-meta mb--20">
                                <div className="rbt-avater">
                                    <a href="#">
                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                    </a>
                                </div>
                                <div className="rbt-author-info">
                                    By <a href={courseInfo.instructorLink}>{courseInfo.instructor}</a> In <a href={courseInfo.instructorCategory}>{courseInfo.instructorCategory}</a>
                                </div>
                            </div>

                            <ul className="rbt-meta">
                                <li><i className="feather-calendar"></i>{courseInfo.lastUpdated}</li>
                                <li><i className="feather-globe"></i>{courseInfo.language}</li>
                                <li><i className="feather-award"></i>{courseInfo.certification}</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!--End Breadcrumb Area-- > */}

    )
}

export default BreadCrumbArea
