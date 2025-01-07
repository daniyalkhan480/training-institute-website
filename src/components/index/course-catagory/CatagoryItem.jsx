import React from 'react'




const CatagoryItem = ({catagories}) => {
  return (

        <div className="rbt-categori-list my-5">
            <a className="blank" href="#"></a>

            {/* links */}
                {catagories.map((item,index)=>(
                        <a href={item.link} key={index}>{item.label}</a>
                ))}

            <a className="blank" href="#"></a>
        </div>    
    )
}

export default CatagoryItem
