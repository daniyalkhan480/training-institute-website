import React from 'react'

const MobileMenuBottom = () => {
  return (
    <div className="mobile-menu-bottom">
        <div className="rbt-btn-wrapper mb--20">
            <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" href="#">
                <span>Enroll Now</span>
            </a>
        </div>

        <div className="social-share-wrapper">
            <span className="rbt-short-title d-block">Find With Us</span>
            <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li><a href="https://www.facebook.com/">
                        <i className="feather-facebook"></i>
                    </a>
                </li>
                <li><a href="https://www.twitter.com">
                        <i className="feather-twitter"></i>
                    </a>
                </li>
                <li><a href="https://www.instagram.com/">
                        <i className="feather-instagram"></i>
                    </a>
                </li>
                <li><a href="https://www.linkdin.com/">
                        <i className="feather-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MobileMenuBottom
