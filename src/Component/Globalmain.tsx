import React from "react"

interface Globalmain_Props {

    Image: string
    title: string
    description:string
}

const Globalmain = ({Image,title,description}: Globalmain_Props) => {
    return (
        <div className="hero">
            <div className="Global-main-cont">
                <img src={Image} alt="" />
                <h3 className="">{title}</h3>
                <p className="para">{description}</p>
            </div>
        </div>
    )
}
export default Globalmain
