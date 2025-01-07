import React from 'react'
import ReqDesItem from './ReqDesItem'
const items = [
    {
        title: "Requirements",
        list: [
            "Become an advanced, confident, and modern JavaScript developer from scratch.",
            "Have an intermediate skill level of Python programming.",
            "Have a portfolio of various data analysis projects.",
            "Use the numpy library to create and manipulate arrays.",
        ]
    },
    {
        title: "Description",
        list: [
            "Use the Jupyter Notebook Environment. JavaScript developer from scratch.",
            "Use the pandas module with Python to create and structure data.",
            "Have a portfolio of various data analysis projects.",
            "Create data visualizations using matplotlib and the seaborn."
        ]
    }
];
const ReqDes = () => {
    return (
        <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
            <div className="row g-5">
                {/* <!-- Start Feture Box  --> */}

                {items.map((item,index)=>(
                    <ReqDesItem item={item} key={index}/>
                ))}

                {/* <!-- End Feture Box  --> */}
            </div>
        </div>
    )
}

export default ReqDes
