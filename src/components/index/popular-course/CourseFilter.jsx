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
                        <button id="featured-tab" data-bs-toggle="tab" data-bs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false"><span
                            className="filter-text">Featured</span> <span className="course-number">02</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular" type="button" role="tab" aria-controls="popular" aria-selected="false"><span
                            className="filter-text">Popular</span> <span className="course-number">05</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="trending-tab" data-bs-toggle="tab" data-bs-target="#trending" type="button" role="tab" aria-controls="trending" aria-selected="false"><span
                            className="filter-text">Trending</span> <span className="course-number">03</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button id="latest-tab" data-bs-toggle="tab" data-bs-target="#latest" type="button" role="tab" aria-controls="latest" aria-selected="false"><span
                            className="filter-text">Latest</span> <span className="course-number">04</span></button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CourseFilter
