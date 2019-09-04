import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import "../css/global.css"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1 className="text-3xl leading-none font-semibold">{frontmatter.title}</h1>
        <h2 className="italic leading-none mt-2 text-gray-700 text-medium">{frontmatter.subtitle}</h2>
        <span className="text-sm">{frontmatter.date} ・ {frontmatter.length} </span>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        length
        path
        title
        subtitle
      }
    }
  }
`