import React from 'react'

const FooterLeft = () => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="footer-widget">
                <div className="logo">
                    <a href="index.html">
                        <img src="assets/images/logo/logo.png" alt="Edu-cause" />
                    </a>
                </div>

                <p className="description mt--20">We're always in search for talented
                    and motivated people. Don't be shy introduce yourself!
                </p>

                <ul className="social-icon social-default justify-content-start dark-social">
                    <li><a href="https://www.facebook.com/" id='dark-social'>
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

                <div className="contact-btn mt--30">
                    <a className="rbt-btn hover-icon-reverse btn-border-gradient radius-round" href="#">
                        <div className="icon-reverse-wrapper">
                            <span className="btn-text">Contact With Us</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterLeft
