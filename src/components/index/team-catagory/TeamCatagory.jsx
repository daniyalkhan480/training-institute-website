import React from 'react'
import TeamItem from './TeamItem';

const TeamCatagory = () => {
    const imgUrls =[
        "assets/images/team/team-05.jpg",
        "assets/images/team/team-09.jpg",
        "assets/images/team/team-03.jpg",
        "assets/images/team/team-07.jpg"
        ];

  return (
    <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
        <div className="container">

            {/* Center Heading */}
            <div className="row mb--60">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <span className="subtitle bg-pink-opacity">Our Instructor</span>
                        <h2 className="title">Word Class Best Instructor</h2>
                        <p className="description has-medium-font-size mt--20">There are many variations of passages of the
                            Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Pictures assets */}
            <div className="row row--15 mt_dec--30">

                <TeamItem imgUrl={imgUrls[0]} Name="Aaron Griffin" role="Department Head"/>
                <TeamItem imgUrl={imgUrls[1]} Name="Rafiq Bali" role="Department Head"/>
                <TeamItem imgUrl={imgUrls[2]} Name="Aaron Griffin" role="Department Head"/>
                <TeamItem imgUrl={imgUrls[3]} Name="Aaron Griffin" role="Department Head"/>

            </div>

            
        </div>
    </div>
  )
}

export default TeamCatagory
