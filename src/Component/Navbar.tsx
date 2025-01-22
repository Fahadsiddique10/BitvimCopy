import React from 'react'
import Navbarmain from './Navbarmain';
import { Navbarin } from '../constants';
import Button from './Button';

function Navbar() {
  const submit = () => {
    return;
};
  
  return (
    <div>
       <header>
        <div className="logo-side">
          <img className="mainbit-main" src='/mainbit-logo.png' alt="Logo" />
        </div>

        <div className="anchor">
            <a href='#'>Personal</a>
            <a href='#'>Business</a>
          </div>

        <div className="mid-head">
        {Navbarin.map((obj, index) => (
                        <ul key={index}>
                    <Navbarmain
                                key={index}
                                title={obj.title}
                            />
                        </ul>
                    ))}
        </div>

        <div className="right-head">
        <div className="main-side">
        <img className="day-main" src='/day.png' alt="Logo" />
        <img className="US-main" src='/US.png' alt="Logo" />
        </div>
        </div>
        
        <div className="log-btn">
        <div className="btn-nav"> <Button label="Sign up" onClick={submit} className="nav-btn" /></div>
        <div className="btn-nav2"> <Button label="Log in" onClick={submit} className="nav-btn" /></div>
        </div>
  
      </header>
    </div>
  )
}

export default Navbar
