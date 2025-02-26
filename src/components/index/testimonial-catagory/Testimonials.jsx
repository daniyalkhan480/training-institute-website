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

const halfLength = Math.ceil(ReviewCardInfo.length / 2);


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

                {Array.from({ length: 2 }).map((_, containerIndex) => (
                    <div key={containerIndex} className="scroll-container">
                        <div className={`d-flex justify-content-evenly scroll-content-${containerIndex === 0 ? 'left' : 'right'}`}>
                            {ReviewCardInfo.slice(
                                containerIndex * halfLength,
                                (containerIndex + 1) * halfLength
                            ).map((info, index) => (
                                <ReviewCard key={`${containerIndex}-${index}`} cardInfo={info} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials





         {/* <div className="scroll-container">
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
                </div> */}