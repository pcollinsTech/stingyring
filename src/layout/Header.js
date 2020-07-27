import React, { Component } from "react"
import styled from "styled-components"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import { Link } from "gatsby"
import logo from "../../content/assets/images/logo.png"
import { FaShoppingCart } from "react-icons/fa"

const CartSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
  font-weight: bold;
  color: #e41d21;
`
class Header extends Component {
  state = {
    items: 0,
    isOpen: false,
  }

  updateItemTotal = (qty) => {
    this.setState({ items: qty })
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", (data) => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar color="" light expand="md" className="transparent">
          <NavbarBrand href="/">
            <img src={logo} alt="" style={{ maxWidth: "125px" }} />
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-flex justify-content-between" navbar>
              <NavItem className="p-3">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem className="p-3">
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem className="p-3">
                <Link to="/contact">Contact</Link>
              </NavItem>
              <NavItem>
                <CartSummary className="snipcart-summary">
                  <a
                    href="#"
                    className="snipcart-checkout"
                    style={{ color: "#e41d21" }}
                  >
                    {" "}
                    <FaShoppingCart />
                  </a>
                  <p className="items_inicato">{this.state.items}</p>
                </CartSummary>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
