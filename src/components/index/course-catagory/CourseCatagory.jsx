import React from 'react'
import CatagoryItem from './CatagoryItem';

const CourseCatagory = () => {


    const cataRow1 = [
        { label: "Web Devlopment", link: "#" },
        { label: "Game Dev", link: "#" },
        { label: "Digital Marketing", link: "#" },
      ];
      const cataRow2 = [
        { label: "Course Item ", link: "#" },
        { label: "Course Item ", link: "#" },
        { label: "Course Item ", link: "#" },
        { label: "Course Item ", link: "#" },
        
      ];
      const cataRow3 = [
        { label: "Course Item ", link: "#" },
        { label: "Course Item ", link: "#" },
        { label: "Course Item ", link: "#" },
      ];


  return (
    <div className="rbt-course-category rbt-section-gap overflow-hidden">
        <div className="container">

            <div className="row mb--25">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <h5 className="subtitle bg-secondary-opacity">TecNsol Courses Category</h5>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-12 col-xl-12">
                    <div className="rbt-categori-leftbar">
        
                        <CatagoryItem catagories={cataRow1}/>
                        <CatagoryItem catagories={cataRow2}/>
                        <CatagoryItem catagories={cataRow3}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCatagory
