import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/global.css";



const AboutPage = () => (
  <Layout title="About me.">
    <SEO title="About" />

    <p>I'm a Christian, a wife, and a mom living in the Fraser Valley, Canada. I grew up in the Philippines and moved to Canada in 2010.</p>
    <p>I have a B.Sc. Computer Science degree in De La Salle University&ndash;Manila specializing in Software Technology where I experienced building a social media website prototype, implementing our own programming language, and developing a Q&A system using natural language processing.</p>
    <p>When I'm not coding, I...</p>
    <ul className="list-disc list-inside">
      <li className="my-0">watch [ Queen's Gambit | Cells at Work | war movies | something-marvel ] with my husband</li>
      <li className="my-0">hang out with <a className="linkRegular linkBorder" href="https://babysleep.app/img/IMG_0746.jpg" target="_blank" rel="noopener noreferrer">my toddler</a></li>
      <li className="my-0">read <a className="linkRegular linkBorder" href="https://fvrl.bibliocommons.com/user_profile/97290383" target="_blank" rel="noopener noreferrer">books</a></li>
    </ul>
  </Layout>
)

export default AboutPage
