import React from 'react'

const overviewData = {
    title: "What you'll learn",
    description: "Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.",
    listOneItems: [
        "Become an advanced, confident, and modern JavaScript developer from scratch.",
        "Have an intermediate skill level of Python programming.",
        "Have a portfolio of various data analysis projects.",
        "Use the numpy library to create and manipulate arrays.",
    ],
    listTwoItems: [
        "Use the Jupyter Notebook Environment. JavaScript developer from scratch.",
        "Use the pandas module with Python to create and structure data.",
        "Have a portfolio of various data analysis projects.",
        "Create data visualizations using matplotlib and the seaborn.",
    ],
    pText : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquam voluptas laudantium incidunt architecto nam excepturi provident rem laborum repellendus placeat neque aut doloremque ut ullam, veritatis nesciunt iusto officia alias, non est vitae. Eius repudiandae optio quam alias aperiam nemo nam tempora, dignissimos dicta excepturi ea quo ipsum omnis maiores perferendis commodi voluptatum facere vel vero. Praesentium quisquam iure veritatis, perferendis adipisci sequi blanditiis quidem porro eligendi fugiat facilis inventore amet delectus expedita deserunt ut molestiae modi laudantium, quia tenetur animi natus ea. Molestiae molestias ducimus pariatur et consectetur. Error vero, eum soluta delectus necessitatibus eligendi numquam hic at?"
}

const OverviewBox = () => {
    return (
        <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more" id="overview">
            <div className="rbt-course-feature-inner has-show-more-inner-content">
                <div className="section-title">
                    <h4 className="rbt-title-style-3">{overviewData.title}</h4>
                </div>
                <p>{overviewData.description} </p>

                <div className="row g-5 mb--30">
                    {/* <!-- Start Feture Box  --> */}
                    <div className="col-lg-6">
                        <ul className="rbt-list-style-1">
                            <li><i className="feather-check"></i>{overviewData.listOneItems[0]}</li>
                            <li><i className="feather-check"></i>{overviewData.listOneItems[1]}</li>    
                            <li><i className="feather-check"></i>{overviewData.listOneItems[2]}</li>
                            <li><i className="feather-check"></i>{overviewData.listOneItems[3]}</li>
                        </ul>
                    </div>
                    {/* <!-- End Feture Box  --> */}

                    {/* <!-- Start Feture Box  --> */}
                    <div className="col-lg-6">
                        <ul className="rbt-list-style-1">
                            <li><i className="feather-check"></i>{overviewData.listTwoItems[0]}</li>
                            <li><i className="feather-check"></i>{overviewData.listTwoItems[1]}</li>
                            <li><i className="feather-check"></i>{overviewData.listTwoItems[2]}</li>
                            <li><i className="feather-check"></i>{overviewData.listTwoItems[3]}</li>
                        </ul>
                    </div>
                    {/* <!-- End Feture Box  --> */}
                </div>
                <p>{overviewData.pText}</p>
            </div>
            <div className="rbt-show-more-btn">Show More</div>
        </div>
    )
}

export default OverviewBox
