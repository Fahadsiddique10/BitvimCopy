import React, { useState } from 'react'

function Banner() {

  const [isUSDOpen, setIsUSDOpen] = useState(false);
  const [isBTCOpen, setIsBTCOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(300); // Default value
  const [toggle, setToggle] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(2);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  function updateToggle(id) {
    setToggle(id)

  }

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
            <div className="bgclr">
              {/* Tabs */}
              <div className="tabs-btn">
                <button className="Tabs" onClick={() => updateToggle(1)}>Buy</button>
                <button className="Tabs" onClick={() => updateToggle(2)}>Swap</button>
              </div>

              {/* Buy Tab Content */}
              <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="top">
                  <p>I Pay</p>
                  <div className="tab-input">
                    <input
                      id="input1"
                      type="number"
                      name="currency-Spay-amount"
                      value={inputValue}
                      readOnly
                    />
                    <div className="dropdown-cont" onClick={() => setIsUSDOpen(!isUSDOpen)}>
                      <img className='usa' src="/US.png" alt="" />
                      <p>USD</p>
                      <img src="/chevron-down.png" alt="" />
                    </div>
                  </div>

                  {/* USD Dropdown */}
                  {isUSDOpen && (
                    <div className="dropdown-menu">
                      <button className="back-btn" onClick={() => setIsUSDOpen(false)}>← Back</button>
                      <h3>Select a Currency</h3>
                      <div className="currency-list">
                        <p>Dollar (USD)</p>
                        <p>Euro (EUR)</p>
                        <p>Australian Dollar (AUD)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Value Buttons */}
                <div className="value-items">
                  <button onClick={() => setInputValue(250)}>250</button>
                  <button onClick={() => setInputValue(500)}>500</button>
                  <button onClick={() => setInputValue(1000)}>1000</button>
                  <button onClick={() => setInputValue(2000)}>2000</button>
                </div>

                {/* Bottom Input - BTC */}
                <div className="bottom">
                  <p>I Get</p>
                  <div className="tab-input">
                    <input
                      id="input2"
                      type="number"
                      name="currency-Spay-amount"
                      value={(inputValue / exchangeRate).toFixed(4)}
                      readOnly
                    />
                    <div className="dropdown-cont" onClick={() => setIsBTCOpen(!isBTCOpen)}>
                      <img src="/avax.png" alt="" />
                      <p>AV...</p>
                      <img src="/chevron-down.png" alt="" />
                    </div>
                  </div>

                  {/* BTC Dropdown */}
                  {isBTCOpen && (
                    <div className="dropdown-menu">
                      <button className="back-btn" onClick={() => setIsBTCOpen(false)}>← Back</button>
                      <h3>Select a Crypto</h3>
                      <div className="currency-list">
                        <p>Bitcoin (BTC)</p>
                        <p>Ethereum (ETH)</p>
                        <p>Litecoin (LTC)</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="midmix">
                  <div className="transaction-summary">
                    {/* Dropdown Toggle */}
                    <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                      <div className="top-drop">
                        <span className='grey'>You get </span>
                        <span>You get 1.0460025 AVAX for $40</span>
                      </div>
                      <span className={`arrow ${isOpen ? "up" : "down"}`}>▲</span>
                    </div>

                    {/* Dropdown Content */}
                    {isOpen && (
                      <div className="dropdown-content">
                        <div className="item">
                          <span>51.6778565 AVAX</span> <span>$37.10</span> <span>$1,917.28</span>
                        </div>
                        <div className="item">
                          <span>Network fee <i>ⓘ</i></span> <span>$0.11</span>
                        </div>
                        <div className="item">
                          <span>Processing fee <i>ⓘ</i></span> <span>$167.00</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="btn-nav2">
                  <button>Continue</button>
                </div>

                <div className="aval-cont">
                  <div className="left-aval">
                    <img src="/avax.png" alt="" />
                    <span className=''>1 Avalanche</span>
                  </div>
                  <div className="right-aval">
                    <span>$34.29</span>
                  </div>
                </div>
                <div className="cook">
                  <a href='#'>Cookie Policy</a>
                </div>
              </div>

              {/* Swap Tab Content */}
              <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="top">
                  <p>I Pay</p>
                  <div className="tab-input">
                    <input
                      id="input1"
                      type="number"
                      name="currency-Spay-amount"
                      value={inputValue}
                      readOnly
                    />
                    <div className="dropdown-cont" onClick={() => setIsUSDOpen(!isUSDOpen)}>
                      <img className='usa' src="/US.png" alt="" />
                      <p>USD</p>
                      <img src="/chevron-down.png" alt="" />
                    </div>
                  </div>

                  {/* USD Dropdown */}
                  {isUSDOpen && (
                    <div className="dropdown-menu">
                      <button className="back-btn" onClick={() => setIsUSDOpen(false)}>← Back</button>
                      <h3>Select a Currency</h3>
                      <div className="currency-list">
                        <p>Dollar (USD)</p>
                        <p>Euro (EUR)</p>
                        <p>Australian Dollar (AUD)</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bottom">
                  <p>I Get</p>
                  <div className="tab-input">
                    <input
                      id="input2"
                      type="number"
                      name="currency-Spay-amount"
                      value={(inputValue / exchangeRate).toFixed(4)}
                      readOnly
                    />
                    <div className="dropdown-cont" onClick={() => setIsBTCOpen(!isBTCOpen)}>
                      <img src="/avax.png" alt="" />
                      <p>AV...</p>
                      <img src="/chevron-down.png" alt="" />
                    </div>
                  </div>

                  {/* BTC Dropdown */}
                  {isBTCOpen && (
                    <div className="dropdown-menu">
                      <button className="back-btn" onClick={() => setIsBTCOpen(false)}>← Back</button>
                      <h3>Select a Crypto</h3>
                      <div className="currency-list">
                        <p>Bitcoin (BTC)</p>
                        <p>Ethereum (ETH)</p>
                        <p>Litecoin (LTC)</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="hidden-cont">
                  <div className="left-hid">
                    <p>No hidden fees</p>
                    <p>Network fee</p>
                    <p>Sign up to get cashback</p>
                  </div>
                  <div className="right-hid">
                    <p>≈ 0.000066 BTC</p>
                    <p>≈ 0.0000109</p>
                  </div>
                </div>

                <div className="payinput-cont">
                  <p>Recipient wallet</p>
                  <div className="pay-input">
                    <input type="Enter the ETH payout address" />
                    <img src="/qr-scanner.svg" alt="" />
                  </div>
                  <div className="bottom-pay">
                    <p>FIO protocol names are supported</p>
                    <img src="/meta-mask.svg" alt="" />
                  </div>
                </div>

          <div className="main-labelinp">
          <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="checkbox"
                  />
                  <span>
                    I've read and agree to the ChangeNOW{" "}
                    <a href="#" className="link">Terms of Use</a>,{" "}
                    <a href="#" className="link">Privacy Policy</a>, and{" "}
                    <a href="#" className="link">Risk Disclosure Statement</a>
                  </span>
                </label>

                {/* Confirm Button */}
                <button className={`confirm-button ${isChecked ? "enabled" : "disabled"}`} disabled={!isChecked}>
                  CONFIRM
                </button>
          </div>
                <span className='green'>Advanced setting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
