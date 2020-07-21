// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from "../components/ItemThumbnail/ItemThumbnail"
import Layout from "../layout"
import SEO from "../components/seo"

const ThumbnailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
        <h2>We're on a mission to create change.</h2>
        <p>
          We believe in implementing change. Last year an estimated 8 million
          metric tons of plastic waste entered the oceans. We didn’t want to
          contribute to that in any way, so we made a wax that’s 100% plastic
          free. The main ingredient comes courtesy of the original wax producers
          (bees!), and it’s made by hand, giving surfers an effective,
          eco-friendly alternative to the petrochemical based products on the
          market.
        </p>
        <p>
          Sadly, over the past 15 years, colonies of bees have been
          disappearing, the reason unknown. Referred to as ‘colony collapse
          disorder’, billions of Honey bees across the world are leaving their
          hives, never to return. In some regions, up to 90% of bees have
          disappeared!
        </p>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
