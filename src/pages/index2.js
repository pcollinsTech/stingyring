// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import HexagonCard from "../components/HexagonCard"
import Layout from "../layout"
import SEO from "../components/seo"
import AboutUs from "../components/AboutUs"
import ItemThumbnail from "../components/ItemThumbnail/ItemThumbnail"
import FullscreenBanner from "../components/FullscreenBanner"
import klit from "../../content/assets/images/klit.jpg"
import logo from "../../content/assets/images/logo.png"
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
        <div className="container">
          <div className="row ">
            <img
              src={logo}
              alt="logo"
              className="mx-auto"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="row ">
            <div className="mx-auto text-center">
              <h2 className="p-4">
                Stingy Ring is commited to making a postive change to our
                environment
              </h2>
              <p className="px-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                deleniti et consectetur eligendi sint a, architecto ratione
                debitis reprehenderit ipsam suscipit quo odio ipsa culpa!
                Repellendus optio deserunt quas saepe.
              </p>
            </div>
          </div>
        </div>
        <AboutUs />
        <FullscreenBanner img={klit} title="100% All Natural Surf Wax" />
        <div className="container">
          <div className="row ">
            <div className="mx-auto text-center">
              <h2 className="p-4">Shop</h2>
              <p className="px-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                deleniti et consectetur eligendi sint a, architecto ratione
                debitis reprehenderit ipsam suscipit quo odio ipsa culpa!
                Repellendus optio deserunt quas saepe.
              </p>
            </div>
          </div>
        </div>
        <ThumbnailsWrapper>
          {items.map(({ node }) => {
            const { title, image, price } = node.frontmatter
            return (
              <ItemThumbnail
                key={node.fields.slug}
                link={node.fields.slug}
                heading={title}
                image={image.childImageSharp.fluid}
                price={price}
              />
            )
          })}
        </ThumbnailsWrapper>
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
