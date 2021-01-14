import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/global.css"



export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="text-3xl leading-none font-semibold">
            {frontmatter.title}
          </h1>
          <p className="italic leading-none mt-2 mb-0 text-gray-700 text-medium">
            {frontmatter.subtitle}
          </p>
          <span className="text-sm">{frontmatter.length} </span>
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
        length
        path
        title
        subtitle
      }
    }
  }
`
