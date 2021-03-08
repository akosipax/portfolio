import React from "react"
import kofi from "../images/BuyMeACoffee_Red@2x.png"
import github from "../images/github32.png"

const Footer = ({ data }) => (
  <div className="text-xs p-3 text-center">
    <p className="leading-tight mb-2">Copyright &copy; {new Date().getFullYear()}. Inspired by
      <a className="linkRegular" href="https://babysleep.app/img/IMG_0746.jpg"> Jeconiah</a>. ♥ Hand-built by yours truly.
      <span role="img" aria-label="shy monkey">🙈</span>
    </p>
    <a href="https://ko-fi.com/thisispax#paymentModal" aria-label="Buy me a tea!" target="_blank" rel="noopener noreferrer">
      <img src={kofi} alt="ko-fi icon" className="h-8 inline-block mr-3 my-3" />
    </a>
    <a href="https://github.com/paxcodes" aria-label="Check out my Github activity" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github logo" className="h-6 inline-block mr-3 my-3" />
    </a>
  </div>
)

export default Footer
