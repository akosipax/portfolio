import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";
import styles from "../css/projects.module.css";

const LabsPage = () => (
  <Layout title="The labs.">
    <SEO title="Experiments" />
    <h3><a href="https://scheduler.margret.pw"><span role="img" aria-label="link">🔗</span> The Baby Schedule Maker</a></h3>
    <p>This page provides a sample nap schedule but unlike most—if not all—baby schedule generators, the time and length of naps or awake times can be adjusted.</p>
    <ul>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Laravel</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Vue.js</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Vuex</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Test-driven</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Cypress</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> PHPUnit</li>
    </ul>
  </Layout>
)

export default LabsPage
