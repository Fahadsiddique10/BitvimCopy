import React from 'react'
import Globalmain from './Globalmain'
import { globalin } from '../constants'

function Global() {
  return (
  <section className="global">
    <div className="container">
    <div className="Global-cont">
          {globalin.map((obj, index) => (
            <ul key={index}>
              <Globalmain
                key={index}
                Image={obj.Image}
                title={obj.title}
                description={obj.description}
              />
            </ul>
          ))}
        </div>        
    </div>
  </section>
  )
}

export default Global
