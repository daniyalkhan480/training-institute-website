import React from 'react'
import BannerCard from './BannerCard'

const SuccessGuide = () => {
    return (
        // <div className="swiper service-item-3-activation  rbt-arrow-between gutter-swiper-30">
        //     <div className="row swiper-wrapper banner" >
        //         {/* cards Components */}

               
        //     </div>
        // </div>

        <div className="container">
            <div className="row">
                <BannerCard label="Step 1" text="Counselling The Institute" num={1} />
                <BannerCard label="Step 2" text="Get Admission" num={1} />
                <BannerCard label="Step 3" text="Physical Classes" num={1} />
                <BannerCard label="Step 4" text="Become Expert" num={1} />
            </div>
        </div>
    )
}

export default SuccessGuide
