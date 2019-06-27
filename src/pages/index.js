import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";

const linkStyle = `text-teal-700  
  border-dotted border-b 
  hover:text-teal-900 
  hover:border-0
  `
const IndexPage = () => (
  <Layout title="Hello there.">
    <SEO title="Home" />
    <p>I&rsquo;m Pax. Welcome to my portfolio! I'm available <a href="mailto:pax.margret@gmail.com" className={linkStyle}>for hire.</a></p>
    <p>If any one of these situations sounds familiar to you, I can help!</p>
    <ul>
      <li><span role="img" aria-label="sad">😔</span> You know your way around your CMS but you can't figure out how to make it do what you want or look the way you want.</li>
      <li><span role="img" aria-label="distraught">😩</span> Your small business website is <em>bloated</em> and is not as fast as it can be.</li>
      <li><span role="img" aria-label="please">🙏</span> You know your stuff but you just wish someone who cares about test-driven, clean, and  maintainable code will lend you a hand.</li>
      <li><span role="img" aria-label="persevering">😣</span> Your app or feature is <em>a drag</em> to maintain and wish someone would write tests for you.</li>
      <li><span role="img" aria-label="excited">🤩</span> You dream of your own single-page application that's fast and SEO-friendly.</li>
    </ul>
  </Layout>
)

export default IndexPage