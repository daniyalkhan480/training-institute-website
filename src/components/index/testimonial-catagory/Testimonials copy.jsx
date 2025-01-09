import React from 'react'
import TestimonialCard from './TestimonialCard'
import ReviewCard from './ReviewCard'
import SwiperSlide from './SwiperSlide'
import ReviewCardInfo from './ReviewCardInfo'

const cardInfo = [
    {
        id: "One",
        btnText: "What is Technsol ? How does it work?",
        bdP1: "You can run Technsol easily. Any School, University, College can be use this Technsol education template for their educational purpose. A university can be success you.",
        bdP2: "Run their online leaning management system by Technsol education template any where and time."
    },
    {
        id: "Two",
        btnText: "How can I get the customer support?",
        bdP1: "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com.",
    },
    {
        id: "Three",
        btnText: "Can I get update regularly and For how long do I get updates?",
        bdP1: " Yes, We will get update the Technsol. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.",
    },


];


const Testimonials = () => {
    return (
        <div className="rbt-testimonial-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row">

                    {/* Heading */}
                    <div className="col-lg-12 mb--60">
                        <div className="section-title text-center">
                            <span className="subtitle bg-coral-opacity">TESTIMONIALS : EDUCATION FOR EVERYONE</span>
                            <h2 className="title">Student's Review</h2>
                        </div>
                    </div>

                </div>


                {/* ReviewCards Sections */}
                <div className="scroll-container">
                    <div className="d-flex justify-content-evenly scroll-content-left">
                        {ReviewCardInfo.map((info, index) => (
                            <ReviewCard key={`left-${index}`} cardInfo={info} />
                        ))}
                    </div>
                </div>
                <div className="scroll-container">
                    <div className="d-flex justify-content-evenly scroll-content-right">
                        {ReviewCardInfo.map((info, index) => (
                            <ReviewCard key={`right-${index}`} cardInfo={info} />
                        ))}
                    </div>
                </div>
                {/* Card Section */}
                {/* <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="rbt-accordion-style rbt-accordion-01  accordion">
                            <div className="accordion" id="accordionExamplea1">
                                <TestimonialCard cardInfo={cardInfo[0]} />
                                <TestimonialCard cardInfo={cardInfo[1]} />
                                <TestimonialCard cardInfo={cardInfo[2]} />
                            </div>
                        </div>
                    </div> */}


                {/* wiper testimonial-activation-1 */}
                {/* <div className="col-lg-6">
                        <div className="swiper testimonial-activation-1 rbt-dot-bottom-left pb--60">
                            <div className="swiper-wrapper">
                                <SwiperSlide />
                            </div>

                            <div className="rbt-swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                                <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 1"></span>
                                <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex="0" role="button"
                                    aria-label="Go to slide 2" aria-current="true">
                                </span>
                                <span className="swiper-pagination-bullet" tabIndex="0" role="button" aria-label="Go to slide 3"></span>
                            </div>

                            
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Testimonials
