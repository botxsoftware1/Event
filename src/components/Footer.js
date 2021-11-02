import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";

function Footer(){
  return (
    <Container>
      <Row className="footer">
        <Col lg={3} md={3} sm={3} className="adjust-first">
          <a href="/">
            <img src="/images/logo-no-background.png" alt="logo" />
          </a>
          <p>Botx Automation is an organisation which aims at introducing and developing innovative techniques/technologies in Robotics and Automations.</p>
        </Col>
        <Col lg={3} md={3} sm={3} className="adjust-second">
          <span class="paraheads">Quicklins</span>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Become A Contributer</a></li>
        </Col>
        <Col lg={3} md={3} sm={3} className="adjust-second">
          <span class="paraheads">Contact Us</span>
          <li>(+55)254-254-254</li>
          <li>info@botx.com</li>
          <li>Helios Tower 75 Tam Trinh Hoang</li>
          <li>Mai - Ha Noi - Viet Nam</li>
        </Col>
        <Col lg={3} md={3} sm={3} className="adjust-second">
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">FAQ</a></li>
        </Col>
      </Row>
      <BlackColor>
      </BlackColor>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    img{
      width: 35%;
    }
    background-color: #40404F;
    li{
      list-style: none;
      color: white;
    }
    span{
      padding-bottom: 5%;
    }
    a{
      text-decoration: none;
    }
    p, a{
      color: white;
      font-size: 1.3rem;
    }

    @media (max-width: 525px)
    {
      img{
        width: 25%;
        padding-left: 2%;
      }
      span{
        padding: 0 5%;
      }
      a{
        font-size: 1.1rem;
      }
      p, li{
        font-size: 1.1rem;
        padding: 0 5%;
      }
    }
`

const BlackColor = styled.div`
    background-color: #000;
    width: 100%;
    height: 20px;
`
