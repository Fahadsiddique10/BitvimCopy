import React from "react"

interface Availmain_Props {

    Image: string

}

const Availmain = ({ Image }: Availmain_Props) => {
    return (
        <div className="hero">
            <div className="Testimain">
                <img src={Image} alt="" />
            </div>
        </div>
    )
}
export default Availmain
