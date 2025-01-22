import React from 'react'

interface Navbarmain_Props {

    title: string

}

const Navbarmain = ({ title }: Navbarmain_Props) => {
    return (
        <div className="hero">
            <div className="Testimain">
                <p className='para'>{title}</p>
            </div>
        </div>
    )
}
export default Navbarmain
