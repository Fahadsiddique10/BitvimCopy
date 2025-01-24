import React, { useEffect, useState } from 'react'
import Navbarmain from './Navbarmain';
import { Navbarin } from '../constants';
import Button from './Button';

function Navbar() {
  const submit = () => {
    return;
};

const [theme, setTheme] = useState ("dark-theme")
const Toggletheme = () => {

  if(theme === "light-theme"){
   setTheme('dark-theme')
  } else{
    setTheme("light-theme");
  } 
  setIsActive(!isActive);
};  

useEffect(() => {

document.body.className= theme;

}, [theme])

const [isActive, setIsActive] = useState(true);

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
        <div className="day-main" onClick={Toggletheme}>
        {isActive ? (
          <img src="/day.png" alt="Active Logo" />
        ) : (
          <img src="/moon.png" alt="Inactive Logo" />
        )}
      </div>
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
