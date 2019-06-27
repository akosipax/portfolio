import React from "react"
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image"

const ImgStyle = {
  borderRadius: "9999px",
  marginBottom: "1em"
};

const Profile = ({ data }) => (
  <div className="p-8 text-center">
    <Img fixed={data.file.childImageSharp.fixed} style={ImgStyle} />
    <p className="overflow-auto m-0">Hi! I&rsquo;m Pax. Let me help you build something great.</p>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 65, height: 65) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Profile data={data} {...props} />}
  />
)
