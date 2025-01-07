import React from 'react'

const ServicesLinkItem = ({title}) => {
  return (
    <li className="has-dropdown"><a href="#">{title}</a>
            <ul className="submenu">
                <li><a href="instructor-dashboard.html">Dashboard</a></li>
                <li><a href="instructor-profile.html">Profile</a></li>
                <li><a href="instructor-enrolled-courses.html">Enrolled Courses</a></li>
                <li><a href="instructor-wishlist.html">Wishlist</a></li>
                <li><a href="instructor-reviews.html">Reviews</a></li>
                <li><a href="instructor-my-quiz-attempts.html">My Quiz Attempts</a></li>
                <li><a href="instructor-order-history.html">Order History</a></li>
                <li><a href="instructor-course.html">My Course</a></li>
                <li><a href="instructor-announcements.html">Announcements</a></li>
                <li><a href="instructor-quiz-attempts.html">Quiz Attempts</a></li>
                <li><a href="instructor-assignments.html">Assignments</a></li>
                <li><a href="instructor-settings.html">Settings</a></li>
            </ul>
        </li>
  )
}

export default ServicesLinkItem
