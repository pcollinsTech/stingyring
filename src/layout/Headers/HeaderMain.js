import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../../content/assets/images/logo.png"

const HeaderMainStyled = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  background: white;
  padding: 20px;
  font-family: Heebo, sans-serif;
  font-size: 2.5em;
  font-weight: 900;
  @media (max-width: 600px) {
    width: 100%;
  }
`
const Logo = styled.div`
  max-width: 200px;
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Menu = styled.div`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  font-size: 25px;
`

const headerMain = (props) => {
  return (
    <HeaderMainStyled className="justify-content-between">
      <LinkStyled to="/">
        <Logo>
          <img src={logo} alt="logo" style={{ maxWidth: "150px" }} />
        </Logo>
      </LinkStyled>
      <Menu>
        <ul className="d-flex justify-content-between">
          <li className="p-3">
            <LinkStyled to="/about">About</LinkStyled>
          </li>
          <li className="p-3">
            <LinkStyled to="/shop">Shop</LinkStyled>
          </li>
          <li className="p-3">
            <LinkStyled to="/contact">Contact</LinkStyled>
          </li>
        </ul>
      </Menu>
    </HeaderMainStyled>
  )
}

export default headerMain
