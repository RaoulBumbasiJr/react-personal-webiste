import React from 'react';
import "./home.css";
import hlogo from '../../images/htmlLogo.png';
import clogo from '../../images/cssLogo.png';
import jlogo from '../../images/jsLogo.png';
import rlogo from '../../images/reactLogo.png';
import wlogo from '../../images/wordpressLogo.png';
import alogo from '../../images/adobeLogo.png';

export default function home() {
  return (
    <div className="home" id="home">
        
        <div className="intro">
          hello, my name is raoul bumbasi jr
        </div>
        
        <div className="text">
          i can code in javascript
        </div>

          <div className="photos">
            <img src={hlogo} alt="html" class="logo"/>
            <img src={clogo} alt="css" class="logo"/>
            <img src={jlogo} alt="javascript" class="logo"/>
            <img src={rlogo} alt="react" class="logo"/>
            <img src={wlogo} alt="wordpress" class="logo"/>
            <img src={alogo} alt="adobepress" class="logo"/>
        </div>
    </div>
  )
}
