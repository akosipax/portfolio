import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";

const IndexPage = () => (
  <Layout title="My blog.">
    <SEO title="Blog of Margret `Pax` Williams" />
    <div className="blog-post">
      <h1 className="text-3xl leading-none font-semibold"><a href="/blog/first-python-app-porting-best-practices-over-python">My First Python App</a></h1>
      <h2 className="italic leading-none mt-2 text-gray-700 text-medium">Porting Best Practices Over to Python</h2>
      <span className="text-sm" title="Sept. 3, 2019">Sept. 3 ・ 4 min</span>
      <p className="my-4">For the last month, I’ve been learning Python and building an app along the way. There are already a lot of blogs out there on Flask, web crawling, and Python in general but what I usually find lacking are notes on best practices such as using virtual environments, testing code, and even using sessions responsibly---and understandably so, since they are meant to be *quick* tutorials.</p>
      <a className="linkRegular" href="/blog/first-python-app-porting-best-practices-over-python">Continue reading...</a>
    </div>
  </Layout>
)

export default IndexPage