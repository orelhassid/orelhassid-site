import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import iconHome from "../icons/iconHome"

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          <span role="img">🏠</span> Home
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <span role="img">✍️</span> Blog
        </Link>
      </li>

      <StaticQuery
        query={graphql`
          query {
            allStrapiCategory {
              edges {
                node {
                  strapiId
                  name
                }
              }
            }
          }
        `}
        render={data =>
          data.allStrapiCategory.edges.map((category, i) => {
            return (
              <li key={category.node.strapiId}>
                <Link to={`/category/${category.node.strapiId}`}>
                  {category.node.name}
                </Link>
              </li>
            )
          })
        }
      />
    </ul>
  </nav>
)

export default Nav
