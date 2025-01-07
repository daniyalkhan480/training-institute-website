import React from 'react'
import CardItem from '../index/popular-course/CardItem';

const relatedCoursesData = {
    author: "Angela",
    courses: [
        {
            imageUrl: "assets/images/course/course-online-01.jpg",
            title: "React Front To Back",
            rating: 5,
            reviews: "15 Reviews",
            bookmark: "Bookmark",
            lessons: "12 Lessons",
            students: "50 Students",
            pText: "It is a long established fact that a reader will be distracted.",
            author: "Angela",
            authorImageUrl: "assets/images/client/avatar-02.png",
            authorLink: "profile.html",
            authorCategory: "Development",
            currentPrice: "$60",
            offPrice: "$120",
            link: "course-details.html",
            off: "-40%",
            btnText: "Learn More",
            btnIcon: "feather-arrow-right",
            addToCart: false
        },
        {
            imageUrl: "assets/images/course/course-online-02.jpg",
            title: "PHP Beginner Advanced",
            rating: 5,
            reviews: "15 Reviews",
            bookmark: "Bookmark",
            lessons: "12 Lessons",
            students: "50 Students",
            pText: "It is a long established fact that a reader will be distracted.",
            author: "Angela",
            authorImageUrl: "assets/images/client/avatar-02.png",
            authorLink: "profile.html",
            authorCategory: "Development",
            currentPrice: "$60",
            offPrice: "$120",
            link: "course-details.html",
            btnText: "Add To Cart",
            btnIcon: "feather-shopping-cart",
            btnClass: "left-icon",
            addToCart: true
        }
    ]
};

const RelatedCourse = () => {
    return (
        <div className="related-course mt--60">
            <div className="row g-5 align-items-end mb--40">

                <div className="col-lg-8 col-md-8 col-12">
                    <div className="section-title">
                        <span className="subtitle bg-pink-opacity">Top Course</span>
                        <h4 className="title">More Course By <strong className="color-primary">{relatedCoursesData.author}</strong></h4>
                    </div>
                </div>


                <div className="col-lg-4 col-md-4 col-12">
                    <div className="read-more-btn text-start text-md-end">
                        <a className="rbt-btn rbt-switch-btn btn-border btn-sm" href="#">
                            <span data-text="View All Course">View All Course</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row g-5">

                {/* Cards */}
                {relatedCoursesData.courses.map((item, index) => (
                    <CardItem cardInfo={item} key={index} />
                ))}

            </div>
        </div>)
}

export default RelatedCourse
