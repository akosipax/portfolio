import React from "react"

import MobileHeader from "./mobileHeader"
import Profile from "./profile"
import Navigation from "./navigation"
import Footer from "./footer"

import "../css/global.css"
import styles from "../css/layout.module.css"

const Layout = (props) => (
  <div>
    <div id="mainNav" className={`${styles.sidebar} fixed sm:w-200 z-0 sm:z-50 sm:grid h-screen border-gray-300 border-r overflow-auto bg-gray-100`}>
      <Profile />
      <Navigation />
      <Footer />
    </div>
    <div id="container" className={ `z-20 absolute overflow-x-hidden sm:grid ${styles.container}` }>
      <MobileHeader />
      <main id="content" className={ `p-8 ${styles.content}` }>
        <h1 className="text-6xl leading-none mb-16">{ props.title }</h1>
        { props.children }
      </main>
    </div>
  </div>
)

export default Layout
