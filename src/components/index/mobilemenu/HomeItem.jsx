import React from 'react'

const HomeItem = ({title,imgUrl,url}) => {
  return (
    <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
        <div className="demo-single">
            <div className="inner">
                <div className="thumbnail">
                    <a href="01-main-demo.html"><img src={imgUrl} alt="Demo Images"/></a>
                </div>
                <div className="content">
                    <h4 className="title"><a href={url}>{title} <span className="btn-icon"><i className="feather-arrow-right"></i></span></a></h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeItem
