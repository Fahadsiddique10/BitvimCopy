import React from 'react'
import { Availin } from '../constants'
import Availmain from './Availmain'

function Avail() {
    return (
        <div>
            <section className='Avail'>
                <div className="container">
                    <div className="flex">
                        <div className="left-Avail">
                            <div className="line-cont">
                                <div className="line">
                                </div>
                                <span>Availability</span>
                            </div>
                            <h2>Access Crypto with Bitvium</h2>
                            <p className='para'>Choose from a variety of payment options, making it easy and convenient to buy and sell digital assets with Bitvium.</p>
                          <div className="Images-flex">
                          {Availin.map((obj, index) => (
                        <ul key={index}>
                    <Availmain
                                key={index}
                                Image={obj.Image}
                            />
                       
                        </ul>
                    ))}
                          </div>
                          <div className="bottom-cont">
                            <span className='grey'>Soon available on:</span>
                         <div className="bottom-image">
                         <img className="mainbit-main" src='/app2.png' alt="Logo" />
                         <img className="mainbit-main" src='/Frame 10694692.png' alt="Logo" />
                         </div>
                          </div>
                        </div>
                        <div className="Right-Avail">
                        <img className="mainbit-main" src='/home-1.png' alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Avail
