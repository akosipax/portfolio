import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../css/projects.module.css";

const ProjectsPage = () => (
  <Layout title="My work.">
    <SEO title="Projects" />
    <h3><a href="https://www.insightforliving.ca"><span role="img" aria-label="link">🔗</span> Insight for Living Canada</a></h3>
    <p>Website for the organization, Insight for Living Canada&mdash;the Bible-teaching ministry of Charles (Chuck) Swindoll.</p>
    <ul>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Drupal 7</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Backend Development</li>
      <li className={styles.item}><p className="leading-tight mb-0"><span role="img" aria-label="check">✅</span> Social Media Metadata <em>for beautiful share previews</em></p></li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> ConstantContact and SoundCloud Integration</li>
    </ul>
    
    <h3><a href="https://www.theshiyrpoets.com"><span role="img" aria-label="link">🔗</span> The SHIYR Poets</a></h3>
    <p>Website for the band, The SHIYR Poets. The SHIYR Poets (pronounced “Sheer”) are Brian Doerksen, Calum Rees, Brian Thiessen and Teresa Trask. They aim to render each psalm in its entirety, singing songs of desperation, desire, justice and praise.</p>
    <ul>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Drupal 7</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Full-Stack Development</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Phase 1: Paypal Buttons</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Phase 2: Drupal Commerce</li>
    </ul>
    
    <h3>SoundCloud Chrome Extension</h3>
    <p>A private chrome extension to check whether broadcasts are properly uploaded to SoundCloud. This turned a tedious 15-minute task into something that can be done in a few minutes.</p>
    
    <ul>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Javascript</li>
      <li className={styles.item}><span role="img" aria-label="check">✅</span> Private Chrome Extension</li>
    </ul>
    
  </Layout>
)

export default ProjectsPage
