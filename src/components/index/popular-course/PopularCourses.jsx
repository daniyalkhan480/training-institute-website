import React from 'react'
import TitleSection from './TitleSection'
import CourseFilter from './CourseFilter'
import CourseCards from './CourseCards'

const PopularCourses = () => {
    return (
        <div className="rbt-course-area bg-color-white rbt-section-gapTop masonary-wrapper-activation">
            <div className="container">
                <TitleSection />
                <CourseFilter />
                <CourseCards />
            </div>
        </div>
    )
}

export default PopularCourses
