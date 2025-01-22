import React from 'react'
import Rampmain from './Rampmain'
import { Rampin } from '../constants'

function Ramp() {
    return (
        <div>
            <section className='Ramp'>
                <div className="container">
                    <div className="Embrace">
                        <div className="line-cont">
                            <div className="line">
                            </div>
                            <span>Global Crypto Access</span>
                        </div>
                        <h2 className='cent'>Explore diverse cryptocurrencies and payment methods</h2>
                        <div className="Count">
                          {Rampin.map((obj, index) => (
                        <ul key={index}>
                    <Rampmain
                                 key={index}
                                 index={index}
                                 title={obj.title}
                                 description={obj.description}
                            />
                       
                        </ul>
                    ))}
                          </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ramp
