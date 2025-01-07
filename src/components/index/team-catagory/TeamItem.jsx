import React from 'react'

const TeamItem = ({imgUrl, Name, role }) => {
  return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
            <div className="team">
                <div className="thumbnail"><img src={imgUrl} alt="Blog Images"/>
                </div>
                <div className="content">
                    <h4 className="title">{Name}</h4>
                    <p className="designation">{role}</p>
                </div>
                <ul className="social-icon">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
  )
}

export default TeamItem
