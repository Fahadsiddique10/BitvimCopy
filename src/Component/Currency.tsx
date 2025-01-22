import React from 'react'
import Currencymain from './Currencymain'
import { Currencyin } from '../constants'
import Button from './Button'

function Currency() {
  const submit = () => {
    return;
  };
  return (
    <section className="Currency">
      <div className="container">
        <div className="line-cont">
          <div className="line">
          </div>
          <span>Currency</span>
        </div>
        <h2 className='cent'>Quick buy</h2>
        <div className="Chain">
          {Currencyin.map((obj, index) => (
            <ul key={index}>
              <Currencymain
                key={index}
                Image={obj.Image}
                title={obj.title}
              />
            </ul>
          ))}
        </div>        
        <div className="btn-Currency"> <Button label="buy crypto" onClick={submit} className="nav-btn" /></div>
      </div>
    </section>
  )
}

export default Currency
