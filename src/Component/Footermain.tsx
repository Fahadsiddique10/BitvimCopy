import React from "react"

interface Fottermain_Props {

    title: string
}

const Fottermain = ({title}: Fottermain_Props) => {
    return (
        <div className="hero">
            <div className="Footer-cont">
                <span className="">{title}</span>
            </div>
        </div>
    )
}
export default Fottermain
