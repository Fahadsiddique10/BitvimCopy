import React from "react"

interface Rampmain_Props {

    title: string
    description: string
    index: number
}

const Rampmain = ({ title, description, index }: Rampmain_Props) => {
    return (
        <div className="hero">
            <div className="Ramp-cont">
            <span className='grey'>{title}</span>
            <p className='para'>{description}</p>
            </div>
        </div>
    )
}
export default Rampmain
