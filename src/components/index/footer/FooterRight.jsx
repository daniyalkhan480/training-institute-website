import React from 'react'

const FooterRight = () => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="footer-widget">
                <h5 className="ft-title">Get Contact</h5>
                <ul className="ft-link">
                    <li><span>Phone:</span> <a href="#">(406) 555-0120</a></li>
                    <li><span>E-mail:</span> <a href="mailto:hr@example.com">admin@example.com</a></li>
                </ul>

                <form className="newsletter-form mt--20" action="#">
                    <h6 className="w-600">Full Address</h6>
                    <p className="description">2000+ Our students are subscribe Around the World.<br /> Don’t be shy introduce yourself!</p>
                </form>
            </div>
        </div>
    )
}

export default FooterRight
