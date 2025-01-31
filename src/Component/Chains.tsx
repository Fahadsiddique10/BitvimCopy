import React from 'react'
import Chainsmain from './Chainsmain'
import { Chainsin } from '../constants'

function Chains() {
    return (
        <div>
            <section className="Chains">
                <div className="container">
                    <div className="line-cont">   
                        <div className="line">
                        </div>
                        <span>Blockchains</span>
                    </div>
                    <h2 className='cent'>Operating on 70+ blockchains</h2>
                    <div className="Chain">
                          {Chainsin.map((obj, index) => (
                        <ul key={index}>
                    <Chainsmain
                                 key={index}
                                 Image={obj.Image}
                    />
                        </ul>
                    ))}
                          </div> 
                </div>
            </section>
        </div>
    )
}

export default Chains
