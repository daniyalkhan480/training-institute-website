import React from 'react'
import DashTableData from './DashTableData'
const handleRowClick = (url) => {
    window.location.href = url;
};
const DashTable = ({sectionData}) => {
    return  (
        <div className="container" >
            <h3>{sectionData.title}</h3>
            <div className="table-responsive">
                <table className="table table-borderless table-light table-hover align-middle" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            {sectionData.thead.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                            {/* Body Row */}
                            {sectionData.data.map((rowObj, index) => (
                                <tr
                                    key={index}
                                    style={{ height: '50px', cursor: 'pointer' }}
                                    onClick={() => handleRowClick(rowObj.link || rowObj.getticketlink)} // Handle both "link" and "getticketlink" for events and testimonials
                                >
                                    {sectionData.thead.map((cellValue , cellIndex) => {
                                        const fieldKey = cellValue.toLowerCase().replace(" ", ""); // Convert header to lowercase and remove spaces
                                        let displayValue = rowObj[fieldKey];
                                        return <td 
                                            key={cellIndex}
                                            style={cellValue === "Price" || cellValue === "Salary" ? { color: "#ff0000" } : {}}
                                            >{displayValue}</td>;
                                    })}
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashTable


// const generateTable = () => {
//     return (
//         <div className="container">
//             <div className="table-responsive">
//                 <table className="table table-borderless table-light table-hover align-middle" style={{ borderCollapse: 'collapse' }}>
//                     <thead>
//                         <tr>
//                             <th scope="col">Courses</th>
//                             <th scope="col">Instructor</th>
//                             <th scope="col">Starting Date</th>
//                             <th scope="col">Duration</th>
//                             <th scope="col">Classes Days</th>
//                             <th scope="col">Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {BatchesData.map((batch, index) => (
//                             <tr
//                                 key={index}
//                                 style={{ height: '50px', cursor: 'pointer' }}
//                                 onClick={() => handleRowClick(batch.link)} // Assuming each batch has a 'link' property
//                             >
//                                 <td style={{ color: "#00308F" }}>{batch.course}</td>
//                                 <td>{batch.trainer}</td>
//                                 <td>{batch.startDate}</td>
//                                 <td>{batch.duration}</td>
//                                 <td>{batch.days}</td>
//                                 <td style={{ color: "#ff0000" }}>{batch.fees}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }




// Special case handling for "Price" field (assuming your data has a "price" field)
// if (cellValue === "Price") {
//     displayValue = displayValue ? <span style={{ color: "#ff0000" }}>{displayValue}</span> : displayValue;
// }

// Special case handling for "imgUrl" field (e.g., events)
// if (cellValue === "Image" && fieldKey === "imageurl" && rowObj[fieldKey]) {
//     return <td key={cellIndex}><img src={rowObj[fieldKey]} alt="Event" style={{ width: "50px", height: "50px" }} /></td>;
// }
