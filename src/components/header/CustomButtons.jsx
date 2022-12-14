import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialogue from "../Login/LoginDialogue";
import { useSelector, useDispatch } from "react-redux";
const ButtonWrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    marin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-right: 10px;
`;

const Container = styled(Box)`
  display: flex;
  margin-left: 10px;
`;

const CustomButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { emailOrMobileNumber, name } = useSelector((state) => state.auth);

  return (
    <ButtonWrapper>
      {emailOrMobileNumber !== "" ? (
        <Typography>{name}</Typography>
      ) : (
        <LoginButton variant="contained" onClick={() => setIsOpen(!isOpen)}>
          Login
        </LoginButton>
      )}

      <Typography
        style={{ marginTop: 3, width: 135, marginRight: 10, marginLeft: 10 }}
      >
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3, marginRight: 10, marginLeft: 10 }}>
        More
      </Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialogue isOpen={isOpen} setIsOpen={setIsOpen} />
    </ButtonWrapper>
  );
};

export default CustomButtons;
