import React from 'react';
import "./home.css";
import hlogo from '../../images/htmlLogo.png';
import clogo from '../../images/cssLogo.png';
import jlogo from '../../images/jsLogo.png';
import rlogo from '../../images/reactLogo.png';
import wlogo from '../../images/wordpressLogo.png';
import alogo from '../../images/adobeLogo.png';
import TypingAnimation from '../typingAnimation/TypingAnimation'
import TypingAnimation1 from '../typingAnimation/TypingAnimation1'

export default function home() {
  return (
    <div className="home" id="home">
        
        <div className="intro">
          <TypingAnimation text="Hello, My name is Raoul Bumbasi Jr :)" speed={50}/>
        </div>
        
        <div className="text">
          <TypingAnimation1 text="I can code in HMTL, CSS, JavaScript, and React.js" delay={2300} speed={75}/>
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
