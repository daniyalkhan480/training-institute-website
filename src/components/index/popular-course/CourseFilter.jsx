import React from 'react'

const CourseFilter = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <ul className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs" id="rbt-myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true"><span className="filter-text">All
                            Course</span> <span className="course-number">06</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="featured-tab" data-bs-toggle="tab" data-bs-target="#web" type="button" role="tab" aria-controls="featured" aria-selected="false"><span
                            className="filter-text">Web Development</span> <span className="course-number">02</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="popular-tab" data-bs-toggle="tab" data-bs-target="#graphic" type="button" role="tab" aria-controls="popular" aria-selected="false"><span
                            className="filter-text">Graphic Designing</span> <span className="course-number">05</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="trending-tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="trending" aria-selected="false"><span
                            className="filter-text">Video Editing</span> <span className="course-number">03</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="latest-tab" data-bs-toggle="tab" data-bs-target="#hot" type="button" role="tab" aria-controls="latest" aria-selected="false"><span
                            className="filter-text">Hot</span> <span className="course-number">04</span></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CourseFilter
