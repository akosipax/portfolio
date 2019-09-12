import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css";

const IndexPage = ({data}) => (
  <Layout title="My blog.">
    <SEO title="Blog of Margret `Pax` Williams" />
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id} className="blog-post">
        <Link
          to={node.frontmatter.path}
          className="text-3xl leading-none font-semibold"
        >
          <h1>{node.frontmatter.title}</h1>
        </Link>
        <h2 className="italic leading-none mt-2 text-gray-700 text-sm">{node.frontmatter.subtitle}</h2>
        <span className="text-sm">{node.frontmatter.date} ・ {node.frontmatter.length}</span>
        <p className="my-4">{node.frontmatter.excerpt}</p>
        <Link
          to={node.frontmatter.path}
          className="linkRegular">Continue reading...</Link>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            path
            subtitle
            length
            excerpt
          }
        }
      }
    }
  }
`