import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";

const AboutPage = () => (
  <Layout title="About me.">
    <SEO title="About" />
    
    <p>I'm a Christian, a wife, and a mom living in Abbotsford, B.C., Canada. I grew up in the Philippines and moved to Canada in 2010.</p>
    <p>I have a B.Sc. Computer Science degree in De La Salle University&ndash;Manila specializing in Software Technology where I experienced building a social media website prototype, implementing our own programming language, and developing a Q&A system using natural language processing.</p>
    <p>When I'm not coding, I...</p>
    <ul className="list-disc list-inside">
      <li className="mb-0">practice the little Japanese I know over at <a className="linkRegular linkBorder" href="https://www.duolingo.com/akosipax" target="_blank" rel="noopener noreferrer">Duolingo</a></li>
      <li className="mb-0">hang out with <a  className="linkRegular linkBorder" href="https://scheduler.margret.pw/img/IMG_0746.jpg" target="_blank" rel="noopener noreferrer">my toddler</a></li>
      <li className="mb-0">read books (currently going through <a className="linkRegular linkBorder" href="https://eloquentjavascript.net/" target="_blank" rel="noopener noreferrer">Eloquent Javascript</a>)</li>
    </ul>
  </Layout>
)

export default AboutPage
