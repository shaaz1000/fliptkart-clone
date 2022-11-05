import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import {ShoppingCart} from "@mui/icons-material";

const ButtonWrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button , & > p , & > div {
    marin-right : 40px;
    font-size : 16px;
    align-items : center;
  }
`;

const LoginButton = styled(Button)`
color: #2874f0;
background: #FFF;
text-transform: none;
padding : 5px 40px;
border-radius : 2px;
box-shadow : none;
font-weight : 600;
height : 32px;
margin-right : 10px;
`

const Container  = styled(Box)`display:flex;`

const CustomButtons = () => {
  return (
    <ButtonWrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style ={{ marginTop: 3, width: 135 ,marginRight:10}}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 ,marginRight:10}}>More</Typography>
      <Container>
        <ShoppingCart/>
        <Typography>Cart</Typography>
      </Container>
    </ButtonWrapper>
  );
};

export default CustomButtons;