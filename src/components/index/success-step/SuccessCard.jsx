import React from 'react'
const style = {
    height : "250px",
    width : "250px",
    display : "flex",
    flexDirection : "column",
    justifyContent : "space-between",
    alignItems : "center",
    padding : "40px",
    borderRadius : "10px",
    margin : "10px"
}
const SuccessCard = ({title, description}) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12  rbt-hover-02 bg-no-shadow card-bg-1 success-card" >
            <div className="title">
                <h4 className="title text-center">{title}</h4>
            </div>
            <div className="content text-center">
                <p className='fs-1'>{description}</p>
            </div>
        </div>
    )
}

export default SuccessCard
