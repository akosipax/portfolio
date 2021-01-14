import React from "react"
import "../css/global.css"
import styles from "../css/layout.module.css"
import Footer from "./footer"
import MobileHeader from "./mobileHeader"
import Navigation from "./navigation"
import Profile from "./profile"



export default function LayoutBlog(props) {
  const ghPath = "https://github.com/paxcodes/portfolio/edit/master/src"
  const ghLink = ghPath + props.path + ".md"
  return (
    <div>
      <div id="mainNav" className={`${styles.sidebar} fixed sm:w-200 z-0 sm:z-50 sm:grid h-screen border-gray-300 border-r overflow-auto bg-gray-100`}>
        <Profile />
        <Navigation />
        <Footer />
      </div>
      <div id="container" className={`z-20 absolute overflow-x-hidden sm:grid ${styles.container}`}>
        <MobileHeader />
        <main id="content" className={`p-8 ${styles.content}`}>
          <div className={`left-0 ${styles.editNote} text-center sm:text-left sm:pl-56`}>See an error (typographical, technical)? Submit an <a href={ghLink} class="text-teal-300 hover:text-teal-200" >edit.</a></div>
          {props.children}

        </main>
      </div>
    </div>
  )
}
