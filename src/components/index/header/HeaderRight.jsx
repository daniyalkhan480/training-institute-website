import React from 'react'

const HeaderRight = () => {
  return (
    <div className="header-right">
        <div className="rbt-btn-wrapper d-none d-xl-block">
            <a className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href="#">
                <span data-text="Apply Now">Apply Now</span>
            </a>
        </div>

    <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
            <button className="hamberger-button rbt-round-btn">
                <i className="feather-menu"></i>
            </button>
        </div>
    </div>
</div>
  )
}

export default HeaderRight
