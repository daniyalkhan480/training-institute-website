import React from 'react'
import SuccessCard from './SuccessCard'

const SuccessStep = () => {
    return (
        <div className="rbt-team-area bg-color-extra2 rbt-section-gap" style={{padding : "50px"}}>
            <div className="container">

                {/* Center Heading */}
                <div className="row mb--60">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-pink-opacity">Success Guide</span>
                            <h2 className="title">Steps Towards Success</h2>
                            <p className="description has-medium-font-size mt--20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                    </div>
                </div>


                {/* Card Here */}
                <div className="row d-flex justify-content-center">
                    <SuccessCard title="Step 1" description="Counselling The Institute" />
                    <SuccessCard title="Step 2" description="Get Admission" />
                    <SuccessCard title="Step 3" description="Physical Classes" />
                    <SuccessCard title="Step 4" description="Become Expert" />
                </div>
            </div>
        </div>
    )
}

export default SuccessStep
