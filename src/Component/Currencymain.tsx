import React from "react"

interface Currencymain_Props {

    Image: string
    title: string
}

const Currencymain = ({Image,title}: Currencymain_Props) => {
    return (
        <div className="hero">
            <div className="Currency-cont">
                <img src={Image} alt="" />
                <h3 className="">{title}</h3>
            </div>
        </div>
    )
}
export default Currencymain
