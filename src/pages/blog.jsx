import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Articles from "../components/articles"
import SEO from "../components/layout/seo"

// import "../assets/css/main.css"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  url
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Articles articles={data.allStrapiArticle.edges} />
        </div>
      )}
    />
  </Layout>
)

export default Blog
