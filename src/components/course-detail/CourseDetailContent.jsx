import React from 'react'
import CourseContentNavigation from './CourseContentNavigation'
import OverviewBox from './OverviewBox'
import CourseContentBox from './CourseContentBox'
import ReqDes from './ReqDes'
import Instructor from './Instructor'
import Review from './Review'
import FeaturedReview from './FeaturedReview'
import RelatedCourse from './RelatedCourse'



const InstructorItem = {
    name: "B.M. Rafekul Islam",
    imageUrl: "assets/images/testimonial/testimonial-7.jpg",
    designation: "Advanced Educator",
    rating: "4.4 Rating",
    review: "75,237 Reviews",
    student: "912,970 Students",
    course: "16 Courses",
    description: "John is a brilliant educator, whose life was spent for computer science and love of nature.",
};
const CourseDetailContent = () => {
    return (
        <div className="col-lg-8">
            <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                    <img className="w-100" src="assets/images/course/course-01.jpg" alt="Card image"/>
                </div>

                {/* Navigation */}
                <CourseContentNavigation />
                <OverviewBox />
                <CourseContentBox />
                <ReqDes />
                <Instructor item={InstructorItem}/>
                <Review />
                <FeaturedReview />
            </div>
            <RelatedCourse />
        </div>
    )
}

export default CourseDetailContent
