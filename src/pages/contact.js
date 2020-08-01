import React from "react"
import Layout from "../layout"
import BannerContact from "../components/BannerContact"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <div className="mobile">
          <BannerContact headingOne="Contact." />
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
