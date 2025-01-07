import React from 'react'


const ContBoxItem = ({item}) => {
    return (
        <li>
            <a href="#">
                <div className="course-content-left">
                    {/* logic for video icon and audio icon */}
                    {item.videoIcon ? <i className="feather-play-circle"></i> : <i className="feather-file-text"></i>}
                    
                    <span className="text">{item.title}</span>
                </div>
                <div className="course-content-right">
                    {item.time ? 
                        <>
                            <span className="min-lable">{item.time}</span>
                            <span className="rbt-badge variation-03 bg-primary-opacity"><i className="feather-eye"></i> Preview</span>
                        </> 
                        : <span className="course-lock"><i className="feather-lock"></i></span>
                    }
                </div>
            </a>
        </li>
    )
}

export default ContBoxItem
