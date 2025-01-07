import React from 'react'

const InnerTop = () => {
  return (
    <div className="inner-top">
        <div className="content">
            <div className="logo">
                <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="Education Logo Images"/>
                </a>
            </div>
            <div className="rbt-btn-close">
                <button className="close-button rbt-round-btn"><i className="feather-x"></i></button>
            </div>
        </div>
        <p className="description">TecNsol is a education website template. You can customize all.</p>
        <ul className="navbar-top-left rbt-information-list justify-content-start">
            <li>
                <a href="mailto:hello@example.com"><i className="feather-mail"></i>example@gmail.com</a>
            </li>
            <li>
                <a href="#"><i className="feather-phone"></i>(302) 555-0107</a>
            </li>
        </ul>
    </div>
  )
}

export default InnerTop
