import React from 'react'
import HomeItem from './HomeItem'


const HomeLinkT = () => {
  return (
    <li className="with-megamenu has-menu-child-item position-static">
    <a href="#">Home <i className="feather-chevron-down"></i></a>
    {/* <!-- Start Mega Menu  --> */}
    <div className="rbt-megamenu menu-skin-dark">
        <div className="wrapper" >
            <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                {/* <!-- Home Items  --> */}
                <HomeItem title="Home Demo" resUrl="01-main-demo.html" imgUrl="/assets/images/splash/demo/h1.jpg"/>
                <HomeItem title="Marketplace" resUrl="12-marketplace.html" imgUrl="/assets/images/splash/demo/h12.jpg"/>
                <HomeItem title="kidengarten" resUrl="04-kindergarten.html" imgUrl="/assets/images/splash/demo/h4.jpg"/>
                {/*<!-- Home Items  -->  */}
            </div>
        </div>
    </div>
    {/* <!-- End Mega Menu  --> */}
</li>

  )
}

export default HomeLinkT
