import React from 'react'
import Globalmain from './Globalmain'
import { globalin } from '../constants'

function Global() {
  return (
    <section className="global">
      <div className="container">
        <div className="Global-crypto">
          <div className="Global-line">
            <div className="line">
            </div>
            <span>Global Crypto Access</span>
          </div>
          <h2 className='cent'>Over 1M users Trust Bitvium for Crypto!</h2>
        </div>
        <div className="Global-cont">
          {globalin.map((obj, index) => (
            <ul key={index}>
              <Globalmain
                key={index}
                Image={obj.Image}
                title={obj.title}
                description={obj.description}
                className={`linesbg-${index+1}`}
              />
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Global
