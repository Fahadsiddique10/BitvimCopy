import React from 'react'
import Fottermain from './Footermain'
import { footin } from '../constants'

function Footer() {
  return (
    <div>
      <footer>
         <div className="main-foot">
            <div className="main-foot-logo">
                <img src="/mainbit-logo.png" alt="" />
            </div>
            <div className="mid-foot">
            <div className="Footer">
          {footin.map((obj, index) => (
            <ul key={index}>
              <Fottermain
                key={index}
                title={obj.title}
              />
            </ul>
          ))}</div>    
            </div>
            <div className="input-cont">
            <div className="input-main">
              <input type="email" name='email' placeholder='Subscribe to newsteller'/>
            </div>
            <button type='submit' className='foot-btn'>
              <img src="/outline.png" alt="" />
            </button>
            </div>
         </div>
      </footer>
      <div className="bottom-footer">
          <div className="Copyright-text">
            <span className='copy'>Copyright 2023 Bitvium Inc. All rights reserved.</span>
          </div>
          <div className="policy-anchor">
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Use</a>
          </div>
          <div className="foot-icons">
            <img src="/facebook.png" alt="" />
            <img src="/twiter.png" alt="" />
            <img src="insta.png" alt="" />
          </div>
         </div>
    </div>
  )
}

export default Footer