import React from "react"

import Profile from "./profile"
import Navigation from "./navigation"
import Footer from "./footer"

import "../css/global.css"
import styles from "../css/layout.module.css"

const Layout = (props) => (
  <div>
    <div className={`h-screen fixed grid border-gray-300 border-r overflow-auto ${styles.sidebar}`}>
      <Profile />
      <Navigation />
      <Footer />
    </div>
    <div id="container" className={ `grid ${styles.container}` }>
      <main id="content" className={ `p-8 ${styles.content}` }>
        <h1 className="text-6xl leading-none mb-16">{ props.title }</h1>
        { props.children }
      </main>
    </div>
  </div>
)

export default Layout
