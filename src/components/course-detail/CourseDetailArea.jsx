import React from 'react'
import CourseDetailContent from './CourseDetailContent'
import CourseSidebar from './CourseSidebar'
const CourseDetailArea = () => {
    return (
        <div className="rbt-course-details-area ptb--60">
            <div className="container">
                <div className="row g-5">
                    <CourseDetailContent />

                    {/* start work from here */}
                    <div className="col-lg-4">

                        {/* write hete now */}
                        <CourseSidebar />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailArea
