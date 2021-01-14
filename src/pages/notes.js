import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/global.css"



const IndexPage = ({ data }) => (
  <Layout title="My notebook.">
    <SEO title="Notebook (Poor Man's Blog)" />
    <p>Some people have blogs. But I don't have time for such formality. When I try to figure out something, I document the process in a virtual notebook. Here are some of the pages.</p>
    <hr className="my-16" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="blog-post mb-10">
        <Link
          to={node.frontmatter.path}
          className="text-3xl leading-none font-semibold"
        >
          <h1>{node.frontmatter.title}</h1>
        </Link>
        <h2 className="italic leading-none mt-2 text-gray-700 text-sm">
          {node.frontmatter.subtitle}
        </h2>
        <span className="text-sm">{node.frontmatter.length}</span>
        <p className="my-4">{node.frontmatter.excerpt}</p>
        <Link to={node.frontmatter.path} className="linkRegular">
          Continue reading...
        </Link>
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
