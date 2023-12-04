import React from 'react'
import "./navbar.css"

export default function navbar() {
  return (
    <div className="navbar">
        <div className="wrapper">
          <a href="#home">home</a>
          <a href="#portfolio">portfolio</a>
          <a href="#quotes">quotes</a>
        </div>
    </div>
  )
}
