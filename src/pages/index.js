import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/global.css";



const IndexPage = () => (
  <Layout title="Hello there.">
    <SEO title="Home" />
    <p>I&rsquo;m Pax. I love Python and automating all-the-things!</p>
    <p>During times I am not monetarily compensated (a.k.a. &ldquo;free time&rdquo;), I build apps and their backend APIs. The first pinned repo in <a class="linkRegular linkBorder" href="https://github.com/paxcodes">my GitHub</a> is my current project.
    </p>

    <p>Check out <a class="linkRegular linkBorder" href="/projects">other projects</a> I've done.</p>

    <p>Or eavesdrop on <a class="linkRegular linkBorder" href="/notes">"conversations with myself"</a> when I attempt to figure out something.</p>
  </Layout>
)

export default IndexPage