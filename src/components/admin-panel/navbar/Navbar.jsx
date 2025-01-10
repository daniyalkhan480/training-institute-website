import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { href: "/admin-panel", icon: "home", label : "Dashboard" },
    { href: "/admin-panel/courses", icon: "home", label : "Courses" },
    { href: "/admin-panel/services", icon: "shopping-cart", label : "Services" },
    { href: "/admin-panel/instructors", icon: "users", label : "Instructors" },
    { href: "/admin-panel/upcoming-batches", icon: "bar-chart-2", label : "Upcoming Batches" },
    { href: "/admin-panel/testimonials", icon: "layers", label : "Testimonials" },
    { href: "/admin-panel/events", icon: "#", label : "Events" },
];


const Navbar = () => {
    const location = useLocation();
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-4">
                <ul className="nav flex-column">
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                                <Link className={`nav-link p-4 ${location.pathname === item.href ? 'active' : ''}`}  to={item.href}> {/**aria-current={index === 0 ? 'page' : undefined} */}
                                <span data-feather="home"></span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar






// <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
// <span>Saved reports</span>
// <a className="link-secondary" href="#" aria-label="Add a new report">
//     <span data-feather="plus-circle"></span>
// </a>
// </h6>
// <ul className="nav flex-column mb-2">
// <li className="nav-item">
//     <a className="nav-link" href="#">
//         <span data-feather="file-text"></span>
//         Current month
//     </a>
// </li>
// <li className="nav-item">
//     <a className="nav-link" href="#">
//         <span data-feather="file-text"></span>
//         Last quarter
//     </a>
// </li>
// <li className="nav-item">
//     <a className="nav-link" href="#">
//         <span data-feather="file-text"></span>
//         Social engagement
//     </a>
// </li>
// <li className="nav-item">
//     <a className="nav-link" href="#">
//         <span data-feather="file-text"></span>
//         Year-end sale
//     </a>
// </li>
// </ul>