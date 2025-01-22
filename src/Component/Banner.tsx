import React from 'react'

function Banner() {
  return (
   <section className='banner'>
  <div className="container">
  <div className='flex'>
      <div className="left-banner">
       <div className="line-cont">
       <div className="line">
       </div>
       <span>Crypto platform</span>
       </div>
       <h1>Your Go-To <br />for Crypto</h1>
       <p className="para">Easily access and manage digital assets</p>
       <div className="play-btn">
       <img className="mainbit-main" src='/Frame 10694691.png' alt="Logo" />
       <img className="mainbit-main" src='/Frame 10694692.png' alt="Logo" />
       </div>
       <div className="pay-cont">
        <span className='pay'>Pay however you like:</span>
        <div className="pay-imgs">
        <img className="mainbit-main" src='/Frame 1597886390.png' alt="Logo" />
        <img className="mainbit-main" src='/apple-pay.png' alt="Logo" />
        <img className="mainbit-main" src='/mastercard.png' alt="Logo" />
        <img className="mainbit-main" src='/visa.png' alt="Logo" />
        </div>
       </div>
      </div>
      <div className="right">
      <img className="mainbit-main" src='/Frame 10694971.png' alt="Logo" />
      </div>
    </div>
  </div>
   </section>
  )
}

export default Banner
