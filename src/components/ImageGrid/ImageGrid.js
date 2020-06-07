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
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
    };
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Naruto.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Sasuke.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Edward Elric.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Manga 3.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Manga 1.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Manga 2.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Wolf.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Horse.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Rose.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Elephants.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Ice Age.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Aslı.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Kygo.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Steve.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Uğur.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Tesla.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Mazda Rx-8.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
          <Col>
            <img
              src={require("../../assets/img/my-drawings/Pontiac GTC.jpg")}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageGrid;
