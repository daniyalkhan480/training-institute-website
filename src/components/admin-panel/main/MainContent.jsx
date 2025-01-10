import React from 'react'
import CardItem from './CardItem';


const cardItems = [
    {
      title: "Student Enrolled",
      pText: "This is some text for card 1.",
      imgUrl: "assets/images/course/course-online-01.jpg"
    },
    {
      title: "Instructors",
      pText: "This is some text for card 2.",
      imgUrl: "assets/images/course/course-online-02.jpg"
    },
    {
      title: "Current Batches",
      pText: "This is some text for card 3.",
      imgUrl: "assets/images/course/course-online-03.jpg"
    },
    {
      title: "  Upcoming Batches",
      pText: "This is some text for card 4.",
      imgUrl: "assets/images/course/course-online-04.jpg"
    }
  ];



  const tableData = [
    { id: "1,001", col1: "random", col2: "data", col3: "placeholder", col4: "text" },
    { id: "1,002", col1: "placeholder", col2: "irrelevant", col3: "visual", col4: "layout" },
    { id: "1,003", col1: "data", col2: "rich", col3: "dashboard", col4: "tabular" },
    { id: "1,003", col1: "information", col2: "placeholder", col3: "illustrative", col4: "data" },
    { id: "1,004", col1: "text", col2: "random", col3: "layout", col4: "dashboard" },
    { id: "1,005", col1: "dashboard", col2: "irrelevant", col3: "text", col4: "placeholder" },
    { id: "1,006", col1: "dashboard", col2: "illustrative", col3: "rich", col4: "data" },
    { id: "1,007", col1: "placeholder", col2: "tabular", col3: "information", col4: "irrelevant" },
    { id: "1,008", col1: "random", col2: "data", col3: "placeholder", col4: "text" },
    { id: "1,009", col1: "placeholder", col2: "irrelevant", col3: "visual", col4: "layout" },
    { id: "1,010", col1: "data", col2: "rich", col3: "dashboard", col4: "tabular" },
    { id: "1,011", col1: "information", col2: "placeholder", col3: "illustrative", col4: "data" },
    { id: "1,012", col1: "text", col2: "placeholder", col3: "layout", col4: "dashboard" },
    { id: "1,013", col1: "dashboard", col2: "irrelevant", col3: "text", col4: "visual" },
    { id: "1,014", col1: "dashboard", col2: "illustrative", col3: "rich", col4: "data" },
    { id: "1,015", col1: "random", col2: "tabular", col3: "information", col4: "text" }
];




const MainContent = () => {
    return (
        <>
            <div className='row mt-4'>
                {cardItems.map((card, index) => (
                    <CardItem key={index} card={card} />
                ))}
            </div>

            {/* Dashboard */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="h4">Sales</h4>

                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                </div>
            </div>

            <img className="my-4 w-100" id="myChart" width="900" height="380" src='/assets/images/dash/graph.png' style={{ objectFit: 'cover', height: '380px' }}></img>
            {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

            <h2>Section title</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.col1}</td>
                                <td>{row.col2}</td>
                                <td>{row.col3}</td>
                                <td>{row.col4}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MainContent
