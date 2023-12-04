import React from 'react'
import "./quotes.css"

export default function quotes() {
  return (
    <div className="quotes" id="quotes">
        
        <div className="proverbBox">
          <div className="container">
            <div className="proverb" id="iroh">"failure is only the opportunity to begin again" - Iroh</div>
          </div>
        </div>
        
        <div className="proverbBox"> 
          <div className="container">
          <div className="proverb" id="buddha">"happiness will never come to those who fail to appreciate what they already have" - Buddha</div>
          </div>
        </div>

        
        <div className="proverbBox">
          <div className="container">
          <div className="proverb" id="nagato">"people live their lives bound by what they accept as correct and true, that's how the define reality" - Itachi</div>
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
