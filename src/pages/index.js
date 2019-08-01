import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";

const IndexPage = () => (
  <Layout title="Hello there.">
    <SEO title="Home" />
    <p>I&rsquo;m Pax. Welcome to my portfolio! I'm available <a className="linkRegular linkBorder" href="mailto:pax.margret@gmail.com">for hire.</a></p>
    <p>If any one of these situations sounds familiar to you, I can help!</p>
    <ul>
      <li><span role="img" aria-label="sad">😔</span> You know your way around your website (your WordPress, Drupal, Gatsby, or Laravel website) but you can't figure out how to make it do what you want or look the way you want.</li>
      <li><span role="img" aria-label="distraught">😩</span> Your small business website is <em>bloated</em> and is not as fast as it can be.</li>
      <li><span role="img" aria-label="excited">🤩</span> You dream of your own single-page application that's fast and SEO-friendly.</li>
    </ul>
    <p className="mt-16">I also collaborate with development teams. So if...</p>
    <ul>
      <li><span role="img" aria-label="please">🙏</span> you need help developing an app or a feature and values clean [test-driven, readable] code</li>
      <li><span role="img" aria-label="persevering">😣</span> your app or feature is <em>a drag</em> to maintain and wish someone would write tests for you</li>
      <li><span role="img" aria-label="high-five">✋</span> you'd appreciate a hand with tracking down and squashing bugs</li>
    </ul>
    <p>...don't hesitate to <a className="linkRegular linkBorder" href="mailto:pax.margret@gmail.com">contact me.</a></p>
  </Layout>
)

export default IndexPage