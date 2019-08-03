import React from "react"
import github from "../images/github32.png"
import so from "../images/so-icon.svg"

const Footer = ({ data }) => (
  <div className="text-xs p-3 text-center">
    <p className="leading-tight mb-2">Copyright &copy; 2019. Inspired by  
      <a className="linkRegular" href="https://babysleep.app/img/IMG_0746.jpg"> Jeconiah</a>. ♥ Hand-built by yours truly. 
      <span role="img" aria-label="shy monkey">🙈</span>
    </p>
    <a href="https://github.com/akosipax" aria-label="Check out my Github activity" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github logo" className="h-6 inline-block mr-3 my-3" />
    </a>
    <a href="https://stackoverflow.com/story/pax" aria-label="Check out my story in StackOverflow" target="_blank" rel="noopener noreferrer">
      <img src={so} alt="stackoverflow icon"  className="h-8 inline-block mr-3 my-3" />
    </a>
  </div>
)

export default Footer
