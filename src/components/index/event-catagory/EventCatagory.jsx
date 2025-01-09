import React from 'react'
import EventCard from './EventCard'


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

const EventCatagory = () => {
    return (
        <div className="rbt-event-area bg-color-extra2 rbt-section-gap">
            <div className="container">

                {/* Events Header Start*/}
                <div className="row mb--60">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-primary-opacity">OUR EVENTS</span>
                            <h2 className="title">Events</h2>
                        </div>
                    </div>
                </div>
                {/* Events Header End */}

                <div className="row g-5">

                    {cardInfo.map((card, index) => (
                        <EventCard key={index} cardInfo={card} />
                    ))  }

                    {/* <EventCard cardInfo={cardInfo[0]} />
                    <EventCard cardInfo={cardInfo[1]} />
                    <EventCard cardInfo={cardInfo[2]} />
                    <EventCard cardInfo={cardInfo[3]} /> */}

                </div>


            </div>
        </div>
    )
}

export default EventCatagory
