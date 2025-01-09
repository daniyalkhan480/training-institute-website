import React from 'react'
import CardItem from './CardItem'
import AllCardData from './AllCardData'
import FeaturedCardData from './FeaturedCardData'
import PopularCardData from './PopularCardData'
import TrendingCardData from './TrendingCardData'
import LatestCardData from './LatestCardData'

const CourseCards = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="tab-content mt--60" id="rbt-myTabContent">

                    {/* All acrds Start */}
                    {/* <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className="row g-5"> */}

                            {/* Single Card      */}
                            {/* {AllCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}

                        </div>
                    </div> */}

                    {/* All acrds End */}

                    {AllCardData.map((categoryData, tabIndex) => (
                        <div
                            key={tabIndex}
                            className={`tab-pane fade ${tabIndex === 0 ? 'show active' : ''}`}
                            id={categoryData.id}
                            role="tabpanel"
                            aria-labelledby={categoryData.label}
                        >
                            <div className="row g-5">
                                {categoryData.cards.map((card, cardIndex) => (
                                    <CardItem key={cardIndex} cardInfo={card} />
                                ))}
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default CourseCards
