import React from 'react'

const cardInfo = [
    {
    imgUrl : "assets/images/event/grid-type-01.jpg",
    date : "11 Jan, 2023",
    location : "Vancouver",
    title : "International Education Fair 2022",
    btnText : "Get Ticket"
    },
    {
    imgUrl : "assets/images/event/grid-type-02.jpg",
    location : "IAC Building",
    time : "8:00 am - 5:00 pm",
    title : "Painting Art Contest 2020",
    btnText : "Get Ticket"
    },
    {
    imgUrl : "assets/images/event/grid-type-03.jpg",
    location : "Paris",
    time : "8:00 am - 5:00 pm",
    title : "TechNsol Education Fair 2022",
    btnText : "Get Ticket"
    },
    {
    imgUrl : "assets/images/event/grid-type-04.jpg",
    location : "IAC Building",
    time : "8:00 am - 5:00 pm",
    title : "Painting Art Contest 2020",
    btnText : "Get Ticket"
    }
];

const EventCard = ({cardInfo}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-card card-list-2 event-list-card variation-01 rbt-hover">

                <div className="rbt-card-img">
                    <a href="event-details.html">
                        <img src="assets/images/event/grid-type-01.jpg" alt="Card image" />
                    </a>
                </div>

                <div className="rbt-card-body">
                    <ul className="rbt-meta">
                        {cardInfo.date && 
                            <li><i className="feather-calendar"></i>{cardInfo.date}</li>
                        }
                        <li><i className="feather-map-pin"></i>{cardInfo.location}</li>
                        {cardInfo.time && 
                            <li><i className="feather-clock"></i>{cardInfo.time}</li>
                        }
                    </ul>
                    <h4 className="rbt-card-title"><a href="event-details.html">{cardInfo.title}</a></h4>
                    <div className="read-more-btn">
                        <a className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round" href="event-details.html">
                            <span className="icon-reverse-wrapper">
                                <span className="btn-text">{cardInfo.btnText}</span>
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                            </span>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EventCard
