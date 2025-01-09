const style = {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    flexDirection : "column",
    borderRadius : "10px",
    // margin : "50px",
    marginBottom : "50px",
    height : "400px",
    width : "300px",
    // background : "var(--gradient-8) !important",
}

const ReviewCard = ({ cardInfo }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={style}>
            <div className={`rbt-card variation-01 rbt-hover `} style={{background: "var(--gradient-12) !important"}}>

                <div className="rbt-card-img" style={{height : "100px", width : "100px" , margin : "auto"}}>
                    <a href="#">
                        <img src={cardInfo.imageUrl} alt="Card image" className="rounded-circle img-fluid" />
                    </a>
                </div>
                <div className="rbt-card-body">
                    <h4 className="rbt-card-title text-center text-white">{cardInfo.name}</h4>
                    <p className="rbt-card-text text-justify text-white">{cardInfo.pText}</p>
                </div>
            </div>
        </div>
    )
}


export default ReviewCard