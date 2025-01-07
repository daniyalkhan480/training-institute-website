import React from 'react'


const ReqDesItem = ({item}) => {
    return (
        <div className="col-lg-6">
            <div className="section-title">
                <h4 className="rbt-title-style-3 mb--20">Requirements</h4>
            </div>
            <ul className="rbt-list-style-1">

                {item.list.map((li,index)=>(
                    <li key={index}><i className="feather-check"></i>{li}</li>
                ))}
                {/* <li><i className="feather-check"></i>Become an advanced, confident, and modern
                    JavaScript developer from scratch.
                </li>
                <li><i className="feather-check"></i>Have an intermediate skill level of Python
                    programming.</li>
                <li><i className="feather-check"></i>Have a portfolio of various data analysis
                    projects.</li>
                <li><i className="feather-check"></i>Use the numpy library to create and manipulate
                    arrays.</li> */}
            </ul>
        </div>
    )
}

export default ReqDesItem
