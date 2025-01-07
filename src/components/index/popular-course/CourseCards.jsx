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
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                        <div className="row g-5">

                            {/* Single Card      */}
                            {AllCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}

                        </div>
                    </div>

                    {/* All acrds End */}


                    {/* Feature Card Start */}
                    <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                        <div className="row g-5">

                            {FeaturedCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}

                        </div>
                    </div>
                    {/* Feature Card End */}


                    {/* Popular Card Start */}
                    <div className="tab-pane fade " id="popular" role="tabpanel" aria-labelledby="popular-tab">
                        <div className="row g-5">

                            {PopularCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}

                        </div>
                    </div>
                    {/* Popular Card End */}


                    {/* Trending Card Start */}
                    <div className="tab-pane fade" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                        <div className="row g-5">
                            {TrendingCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}
                        </div>
                    </div>
                    {/* Trending Card End */}

                    {/* Latest Card Start */}
                    <div className="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                        <div className="row g-5">
                            {LatestCardData.map((card, index) => (
                                <CardItem key={index} cardInfo={card} />
                            ))}
                        </div>
                    </div>
                    {/* Latest Card End */}

                </div>
            </div>
        </div>
    )
}

export default CourseCards
