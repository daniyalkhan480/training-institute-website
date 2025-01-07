import React from 'react'

const CourseContentNavigation = () => {
    return (
        <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <nav className="mainmenu-nav onepagenav">
                <ul className="mainmenu">
                    <li className="current">
                        <a href="#overview">Overview</a>
                    </li>
                    <li>
                        <a href="#coursecontent">Course Content</a>
                    </li>
                    <li>
                        <a href="#details">Details</a>
                    </li>
                    <li>
                        <a href="#intructor">Intructor</a>
                    </li>
                    <li>
                        <a href="#review">Review</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CourseContentNavigation
