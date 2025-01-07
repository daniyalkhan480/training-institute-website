import React from 'react'
import CareerItem from './CareerItem'

const CareerLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item position-static">
        <a href="#">Careers <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu grid-item-3">
            <div className="wrapper" >
                <div className="row row--15 single-dropdown-menu-presentation">
                    
                    <CareerItem />
                    <CareerItem />
                    <CareerItem />

                </div>
                {/* Join Us LinkS */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="btn-wrapper">
                            <a className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#">
                                <span className="icon-reverse-wrapper">
                                <span className="btn-text">Join Us</span>
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default CareerLink
