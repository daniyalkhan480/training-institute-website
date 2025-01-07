import React from 'react'

const TestimonialCard = ({ cardInfo }) => {
    return (
        <div className="accordion-item card">
            <h2 className="accordion-header card-header" id={`heading${cardInfo.id}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${cardInfo.id}`} aria-expanded="true" aria-controls={`collapse${cardInfo.id}`}>
                    {cardInfo.btnText}
                </button>
            </h2>
            <div id={`collapse${cardInfo.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${cardInfo.id}`} data-bs-parent="#accordionExamplea1">

                <div className="accordion-body card-body">
                    <p className="mb--15"> {cardInfo.bdP1} </p>

                    {cardInfo.bdP2 &&
                        <p> {cardInfo.bdP2}</p>
                    }
                </div>
            </div>
        </div>

    )
}

export default TestimonialCard
