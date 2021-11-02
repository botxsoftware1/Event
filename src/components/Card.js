import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";

function Card(props) {
  return(
    <Section>
    <Leftcircle></Leftcircle>
    <Rightcircle></Rightcircle>
    <Container>
      <img src={props.img} alt="event=image" />
        <Description className="box">
          <span>{props.title}</span>
          <p>{props.date}</p>
          <span class="desc">{props.description}</span>
          <h3 class="desc">{props.price}</h3>
          <button class="btn btn-lg">REGISTER</button>
        </Description>
    </Container>
    </Section>
  )
}

export default Card;

const Section = styled.div`

`

const Container = styled.div`
      display: flex;
      align-items: center;
      left: 25%;
      margin: 7% 0;
      position: relative;
      text-align: left;
      width: 50%;
      border-radius: 20px;
      display: flex;
      box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      overflow: hidden;
      color: #000;
      span{
        font-size: 4.5rem;
        font-weight: 700;
      }
      p{
        margin: 0 0 15%;
        font-size: 2.5rem;
      }
      .desc{
        font-size: 2rem;
        font-weight: 500;
      }
      h3{
        margin: 0;
      }
      .btn{
        margin: 30% 0 5% 0;
        padding: 3% 10%;
        border-radius: 15px;
        color: white;
        background-color: #fb8c8c;
      }
      .btn:hover{
        background-image: linear-gradient(to right top, #fb8c8c, #fc1917);
      }
      img{
        margin-right: 7%;
        width: 45%;
      }

      @media (max-width: 1024px){
        width: 80%;
        left: 10%;
        span{
          font-size: 3.5rem;
        }
        img{
          width: 50%;
        }
      }

      @media (max-width: 767px){
        width: 90%;
        margin: 10% 0;
        left: 5%;
        padding: 5% 0;
        span{
        font-size: 2.5rem;
        }
        p{
        font-size: 2rem;
        }
        .desc{
          font-size: 1.5rem;
        }
        .btn{
          padding: 4% 7%;
          margin: 20% 0 5% 0;
          font-size: 1.2rem;
        }
        img{
          width: 50%;
        }
      }

      @media (max-width: 411px){
        span{
          font-size: 2rem;
        }
        p{
          font-size: 1.5rem;
        }
        .desc{
          font-size: 1rem;
        }
        .btn{
          font-size: 1rem;
        }
      }
`
const Description = styled.div`
`

const Rightcircle = styled.div`
     height: 15rem;
     width: 15rem;
     background-image: linear-gradient(to right top, #f99487, #fc1917);
     border-radius: 50%;
     margin: 20% 0 -33% 65.1%;

     @media (max-width: 1024px){
       height: 10rem;
       width: 10rem;
       margin: 40% 0 -50% 80%;
     }

     @media(max-width: 900px)
     {
       margin: 30% 0 -50% 78%;
     }

     @media (max-width: 767px){
       height: 7rem;
       width: 7rem;
       margin: 80% 0 -65% 86%;
     }

     @media (max-width: 440px){
       height: 5rem;
       width: 5rem;
       margin: 76% 0 -67% 83%;
     }

     @media (max-width: 359px)
     {
       width: 4rem;
       height: 4rem;
     }
`
const Leftcircle = styled.div`
     height: 30rem;
     width: 30rem;
     margin: 0 0 -21% 17%;
     background-image: linear-gradient(to right top, #f99487, #fc1917);
     border-radius: 50%;

     @media (max-width: 1024px){
       height: 20rem;
       width: 20rem;
       margin: 0 0 -20% 5%;
     }

     @media (max-width: 900px)
     {
       margin: 0 0 -20% 5%;
     }

     @media (max-width: 767px){
       height: 15rem;
       width: 15rem;
       margin: 0 0 -53% 1%;
     }

     @media (max-width: 440px)
     {
       width: 10rem;
       height: 10rem;
       margin: 0 0 -53% 1%;
     }

     @media (max-width: 359px)
     {
       width: 9rem;
       height: 9rem;
     }
`
