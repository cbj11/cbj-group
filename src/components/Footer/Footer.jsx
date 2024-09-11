import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>CBJ Group</h1>
            </div>
            <p>Simple but Pricisely</p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Jakarta Barat, DKI Jakarta </li>
              <li>Email: cbjindustries1@gmail.com</li>
              <li>Phone: +62 81282471354</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
