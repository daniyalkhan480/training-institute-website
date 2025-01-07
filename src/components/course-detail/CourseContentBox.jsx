import React from 'react'
import ContBoxItem from './ContBoxItem'
import ContentBoxData from './ContentBoxData'
const item = {
    id: 1,
    accBtnText: "Intro to Course and Histudy",
    accBtnTime: "1hr 30min",
    collapse: true,
    contentResources: [
        {
            title: "Course Intro",
            time: "30 min",
            preview: "Preview",
            videoIcon: true
        },
        {
            title: "Watch Before Start",
            time: "0.5 min",
            preview: "Preview",
            videoIcon: true
        },
        {
            title: "Read Before You Start",
            videoIcon: false
        }
    ],
    title: "Course Content",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquam voluptas laudantium incidunt architecto nam excepturi provident rem laborum repellendus placeat neque aut doloremque ut ullam, veritatis nesciunt iusto officia alias, non est vitae. Eius repudiandae optio quam alias aperiam nemo nam tempora, dignissimos dicta excepturi ea quo ipsum omnis maiores perferendis commodi voluptatum facere vel vero. Praesentium quisquam iure veritatis, perferendis adipisci sequi blanditiis quidem porro eligendi fugiat facilis inventore amet delectus expedita deserunt ut molestiae modi laudantium, quia tenetur animi natus ea. Molestiae molestias ducimus pariatur et consectetur. Error vero, eum soluta delectus necessitatibus eligendi numquam hic at?"
};


const CourseContentBox = () => {
    return (
        <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30" id="coursecontent">
            <div className="rbt-course-feature-inner">
                <div className="section-title">
                    <h4 className="rbt-title-style-3">Course Content</h4>
                </div>
                <div className="rbt-accordion-style rbt-accordion-02 accordion">
                    <div className="accordion" id="accordionExampleb2">


                        {ContentBoxData.map((item, index) => (

                            <div className="accordion-item card" key={index}>
                                <h2 className="accordion-header card-header" id={`headingTwo${item.id}`}>
                                    <button className={`accordion-button ${item.collapse && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapseTwo${item.id}`} aria-expanded="true" aria-controls={`#collapseTwo${item.id}`}>
                                        {item.accBtnText} <span className="rbt-badge-5 ml--10">{item.accBtnTime}</span>
                                    </button>
                                </h2>

                                {/* Open Accordion */}
                                <div id={`collapseTwo${item.id}`} className={`accordion-collapse collapse ${!item.collapse && "show"}`} aria-labelledby={`headingTwo${item.id}`} data-bs-parent="#accordionExampleb2">
                                    <div className="accordion-body card-body pr--0">
                                        <ul className="rbt-course-main-content liststyle">

                                            {item.contentResources.map((item, index) => (
                                                <ContBoxItem key={index} item={item} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        ))}



                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContentBox
