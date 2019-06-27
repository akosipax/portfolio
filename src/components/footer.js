import React from "react"

const linkStyle = `
  text-teal-700
  hover:text-teal-900
`

const Footer = ({ data }) => (
  <div className="text-xs p-3 text-center">
    <p className="leading-tight mb-2">Copyright &copy; 2019. Inspired by  
      <a className={ linkStyle } href="https://scheduler.margret.pw/img/IMG_0746.jpg"> Jeconiah</a>. ♥ Hand-built by yours truly. 
      <span role="img" aria-label="shy monkey">🙈</span>
    </p>
  </div>
)

export default Footer
