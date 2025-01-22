import React from "react"

interface Chainsmain_Props {

    Image: string
}

const Chainsmain = ({Image}: Chainsmain_Props) => {
    return (
        <div className="hero">
            <div className="Chain-cont">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}
export default Chainsmain
