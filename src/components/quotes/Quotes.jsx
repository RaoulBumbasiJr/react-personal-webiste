import React from 'react'
import "./quotes.css"
import gay from '../../images/gayNigga.png';

export default function quotes() {
  return (
    <div className="quotes" id="quotes">
        
        <div className="proverbBox">
          <div className="container">
            <div className='holder'><img src={gay} alt="html" class="logo" className="gay"/></div>
            <div className="proverb" id="iroh">"failure is only the oppurtuninty to begin again" - Iroh</div>
          </div>
        </div>
        
        <div className="proverbBox"> 
          <div className="container">
          <div className="proverb" id="buddha">"hapiness will never come to those who fail to appreciate what they already have" - Buddha</div>
          </div>
        </div>

        
        <div className="proverbBox">
          <div className="container">
          <div className="proverb" id="nagato">"feel the pain, think about pain, know the pain, and accept the pain" - Nagato</div>
          </div>
        </div>
        
        <div className="proverbBox">
          <div className="container">
          <div className="proverb" id="kaori">"someday when the pages of my life end, i know that you will be the one of the most beautiful chapters" -Kaori</div>
          </div>
        </div>
    </div>
  )
}
