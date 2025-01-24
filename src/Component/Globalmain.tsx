import React from "react"

interface Globalmain_Props {

    Image: string
    title: string
    description:string
    className:string
}

const Globalmain = ({Image,title,description,className}: Globalmain_Props) => {
    return (
        <div className="hero">
            <div className={`Global-main-cont ${className}`}>
                <img src={Image} alt="" />
               <div className="glob-cont">
               <h3 className="">{title}</h3>
               <p className="para">{description}</p>
               </div>
            </div>
        </div>
    )
}
export default Globalmain
