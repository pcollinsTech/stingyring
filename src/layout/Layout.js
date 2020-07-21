import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Container } from "reactstrap"
import { theme } from "../styles/theme"
import { GlobalStyle } from "../styles/globalStyle"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.css"
import Banner from "../components/Banner"
import Header from "./Header"
import "../styles/scss/main.scss"
const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

const MainSection = styled.main`
  width: 100%;
`

class Layout extends React.Component {
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure("show_continue_shopping", true)
    }
  }

  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let banner

    if (location.pathname === rootPath) {
      banner = <Banner />
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageWrapper>
            <Header />
            <MainSection>
              {banner}
              <Container>{children}</Container>
            </MainSection>
            <Footer />
          </PageWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
