// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <Container className="py-5">
          <h2 className="text-center mb-5">
            We're on a mission to create change.
          </h2>
          <div className="row mb-5">
            <p>
              Our passion is to reduce the nasty chemicals and plastics entering
              our oceans and lands. We have created an All natural Surf Wax
              using only 3 natural ingredients. The main ingredient is Beeswax.
              As surfers, we are very much aware of the plastics in the sea and
              on our beaches. This surf wax is produced by hand by us using
              Local beeswax which helps to keep the bee colonies in demand and
              by doing so increasing the condition of the environments for
              plants and animals to exist in and also by pollinating our
              vegetable plants.
            </p>
            <p>
              The wax is Chemical and Plastic-free and the packaging is 100%
              compostable and biodegradable safe. There are no glues used in any
              of the processes. Keeping it clean Since 2020.
            </p>
            <p>
              We hope to improve the oceans by providing this natural beeswax
              surf wax that does not contaminated our precious seas that we all
              enjoy.
            </p>
            <p>
              Keep stuck to your board with a colourful clean natural Wax from
              us @stingyring
            </p>
            <p>
              We also have a sister company WaxhiveWraps where we produce a
              Beeswax Food Wrap fro the reduction in Single-use Plastics Check
              them out at{" "}
              <a href="https://www.waxhivewraps.com">www.waxhivewraps.com</a>
            </p>
          </div>
        </Container>
        <div className="container">
          <h2 className="text-center my-5">Ingredients</h2>
          <div className="row py-5 d-flex justify-content-center">
            <div className="col-sm-6">
              <Img fluid={this.props.data.coconut.childImageSharp.fluid} />
              <h2 className="text-center mb-5 py-4">Coconut Oil</h2>
            </div>
            <div className="col-sm-6">
              <Img fluid={this.props.data.pinetree.childImageSharp.fluid} />
              <h2 className="text-center mb-5 py-4">Pine Tree Resin</h2>
            </div>
            <div className="col-sm-6">
              <Img fluid={this.props.data.beeswax.childImageSharp.fluid} />
              <h2 className="text-center mb-5 py-4">Beeswax</h2>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

export const indexImage = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    beeswax: file(relativePath: { eq: "beeswax.jpeg" }) {
      ...indexImage
    }
    coconut: file(relativePath: { eq: "coconut.jpeg" }) {
      ...indexImage
    }
    pinetree: file(relativePath: { eq: "pinetree.jpeg" }) {
      ...indexImage
    }
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
