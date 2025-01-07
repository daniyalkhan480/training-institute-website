import React from 'react'
import HomeItem from './HomeItem'

const HomeLink = () => {
  return (
    <li className="with-megamenu has-menu-child-item position-static">
        <a href="#">Home <i className="feather-chevron-down"></i></a>
        <div className="rbt-megamenu menu-skin-dark">
            <div className="wrapper">

                {/* Home Linke main code div */}
                <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                    <HomeItem title="Home Demo" imgUrl="/assets/images/splash/demo/h1.jpg"  url="01-main-demo.html"/>
                    <HomeItem title="Marketplace" imgUrl="/assets/images/splash/demo/h12.jpg"  url="12-marketplace.html"/>
                    <HomeItem title="kindergarten" imgUrl="/assets/images/splash/demo/h4.jpg"  url="04-kindergarten.html"/>
                </div>   

                <div className="load-demo-btn text-center">
                    <a className="rbt-btn-link color-white" href="#">Scroll to view more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16"></svg></a>
                </div> 
                
            </div>
        </div>
    </li>
  )
}

export default HomeLink
