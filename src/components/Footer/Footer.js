/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="5">
              <h1 className="title">D• Berat Karatas</h1>
            </Col>
            <Col md="4">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Anasayfa
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <NavLink>Creative Team</NavLink>
              <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                Contact Us
              </NavLink>
              <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                About Us
              </NavLink>
              <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
                Blog
              </NavLink>
              <NavLink href="https://opensource.org/licenses/MIT">
                License
              </NavLink>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
