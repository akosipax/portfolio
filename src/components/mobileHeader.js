import React from "react"

const MobileHeader = () => (
  <div className={`sm:hidden border-b-2 p-3 flex items-center`}>
      <a href="#mainNav" id="openMenu">
        <img src="https://img.icons8.com/carbon-copy/100/000000/menu.png" width="30" className="inline" alt="toggle menu"/>
      </a>
      <a href="#" id="closeMenu" className={`hidden`}>
        <img src="https://img.icons8.com/carbon-copy/100/000000/menu.png" width="30" className="inline" alt="toggle menu"/>
      </a>
    
    <h1 className="inline font-bold font-mono ml-2" >Margret &ldquo;Pax&rdquo; Williams</h1>
  </div>
)

export default MobileHeader