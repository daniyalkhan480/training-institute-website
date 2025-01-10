import React from 'react'
import TitleSection from './TitleSection'
import PopCoursesContent from './PopCoursesContent';


const PopularCourses = () => {
    return (
        <div className="rbt-course-area bg-color-white rbt-section-gapTop masonary-wrapper-activation">
            <div className="container">
                <TitleSection />
                <PopCoursesContent />
            </div>
        </div>
    )
}

export default PopularCourses
