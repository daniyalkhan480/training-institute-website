import React from 'react'
import BatachesData from './BatachesData'
const UpcomingBatches = () => {
    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table table-borderless table-light table-hover align-middle" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th scope="col">Courses</th>
                            <th scope="col">Instructor</th>
                            <th scope="col">Starting Date</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Classes Days</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BatachesData.map((batch, index) => (
                            <tr key={index} style={{ height: '50px' }}>
                                <td>{batch.course}</td>
                                <td>{batch.trainer}</td>
                                <td>{batch.startDate}</td>
                                <td>{batch.duration}</td>
                                <td>{batch.days}</td>
                                <td>{batch.fees}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpcomingBatches
