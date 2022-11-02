import React from 'react'
import "./portfolio.css"

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
          
        <div className="box" >
          <div className="linkContainer">
            <a className="projectLink" 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noreferrer noopener">
                personal website
            </a>
          </div>
        </div>
    
        <div className="box" >
          <div className="linkContainer">
            <a className="projectLink" 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noreferrer noopener">
                eCommerce website
            </a>
          </div>
        </div>
            
        <div className="box" >
          <div className="linkContainer">
            <a className="projectLink" 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noreferrer noopener">
                flashcard application
            </a>
          </div>
        </div>
            
        <div className="box" >
          <div className="linkContainer">
            <a className="projectLink" 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noreferrer noopener">
                api project
            </a>
          </div>
        </div>
    </div>
  )
}
/*<a href="https://www.youtube.com/" className='linkButton'><div className="label">personal website</div></a>*/