import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header(){
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
        <img class="logo" src="/images/logo.jpeg" alt="logo" />
      <Menu>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </Menu>
      <RightMenu>
         <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CustomWrapper>
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;


const Container = styled.div`
     min-height: 60px;
     display: flex;
     background-color: white;
     align-items: right;
     justify-content: space-between;
     padding: 0 20px;
     top: 0;
     left: 5px;
     right: 5px;
     z-index: 10;
     box-shadow: 1px 1px 10px 0px #888;
`

const Menu = styled.div`
     display: flex;
     align-items: right;
     justify-content: right;
     flex: 1;
     margin-top: 2%;
     margin-right: 2%;

     a{
       font-weight: 600;
       padding: 0 25px;
       color: #b22222;
       text-decoration: none;
       flex-wrap: nowrap;
     }
     @media (max-width: 767px){
       display: none;
     }
`

const RightMenu = styled.div`
     display: flex;
     align-items: center;

     a {
       font-weight: 600;
       text-transform: uppercase;
       padding: 0 10px;
     }

     @media (min-width: 767px){
       display: none;
     }
`

const CustomMenu = styled(MenuIcon)`
     cursor: pointer;
`

const BurgerNav = styled.div `
     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     background: white;
     width: 300px;
     z-index: 20;
     list-style: none;
     padding: 20px;
     text-align: left;
     transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
     transition: transform 0.2s;
     li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0, 0, 0, 0.2);
     }
     a {
       font-weight: 600;
       text-decoration: none;
       color: #b22222;
     }
`

const CustomClose = styled(CloseIcon)`
     cursor: pointer;
     margin: auto 7%;
`

const CustomWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
`
