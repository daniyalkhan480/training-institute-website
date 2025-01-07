import React from 'react'
import FooterLinksItem from './FooterLinksItem'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'

const fLinkItems = [
  {
    title: "Our Company",
    links: [
      {
        title: "Contact Us",
        link: "contact.html"
      },
      {
        title: "Become Teacher",
        link: "become-a-teacher.html"
      },
      {
        title: "Blog",
        link: "blog.html"
      },
      {
        title: "Instructor",
        link: "instructor.html"
      },
      {
        title: "Events",
        link: "event-list.html"
      },
      {
        title: "Course",
        link: "course-filter-one-toggle.html"
      },
      {
        title: "Contact",
        link: "contact.html"
      }
    ]
  },
  {
    title: "Useful Links",
    links: [
      {
        title: "Marketplace",
        link: "marketplace.html"
      },
      {
        title: "Kindergarten",
        link: "kindergarten.html"
      },
      {
        title: "University",
        link: "university.html"
      },
      {
        title: "GYM Coaching",
        link: "gym-coaching.html"
      },
      {
        title: "FAQ",
        link: "faq.html"
      },
      {
        title: "About Us",
        link: "about-us.html"
      },
      {
        title: "Privacy Policy",
        link: "privacy-policy.html"
      }
    ]
  }
]

const Footer = ({ title, links }) => {
  return (
    <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">

      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">

            <FooterLeft />
            <FooterLinksItem item={fLinkItems[0]} />
            <FooterLinksItem item={fLinkItems[1]} />
            <FooterRight />
          </div>
        </div>
      </div>

      {/* Footer Mid */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">Copyright © 2023 <a href="https://themeforest.net/user/rbt-themes">Rainbow-Themes.</a> All Rights Reserved</p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li><a href="#">Terms of service</a></li>
                <li><a href="privacy-policy.html">Privacy policy</a></li>
                <li><a href="subscription.html">Subscription</a></li>
                <li><a href="login.html">Login & Register</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>



    </footer>

  )
}

export default Footer
