import React from "react"
import { Link } from "gatsby"

import styles from "../css/navigation.module.css"

const Navigation = () => (
  <nav className="grid items-center">
    <Link className={`${styles.link} ${styles.linkOdd}`} activeClassName={styles.linkActive} to="/">Home</Link>
    <Link className={`${styles.link} ${styles.linkEven}`} activeClassName={styles.linkActive} to="/projects">Projects</Link>
    <Link className={`${styles.link} ${styles.linkEven}`} activeClassName={styles.linkActive} to="/about">About</Link>
  </nav>
)

export default Navigation
