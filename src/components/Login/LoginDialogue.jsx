import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setEmailOrMobileNumber,
  setCurrentPassword,
} from "../../store/slice/authSlice";
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 78% no-repeat;
  height: 84%;
  width: 28%;
  padding: 46px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #ffff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const Create = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const LoginDialogue = ({ isOpen, setIsOpen }) => {
  const accountInitialValues = {
    login: {
      view: "Login",
      heading: "Login",
      subheading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signup: {
      view: "Signup",
      heading: "Looks like you're new here",
      subheading: "Signup with your mobile number to get started",
    },
  };
  const [currentMode, setCurrentMode] = useState(accountInitialValues.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const toggleCurrentMode = () => {
    if (currentMode.view === "Login") {
      return setCurrentMode(accountInitialValues.signup);
    }
    return setCurrentMode(accountInitialValues.login);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    if (currentMode.view === "Signup") {
      toggleCurrentMode();
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(setEmailOrMobileNumber(email));
      dispatch(setCurrentPassword(password));
      handleClose();
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image>
          <Typography variant="h5">{currentMode.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {currentMode.subheading}
          </Typography>
        </Image>
        {currentMode.view === "Login" ? (
          <Wrapper>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              label="Enter Email/Mobile Number"
            />
            <TextField
              hidden
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              label="Enter Password"
            />
            <Text>
              By Continuing, you agree to Flipkart's Term of Use and Privacy
              Policy
            </Text>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <Create onClick={toggleCurrentMode}>
              New to Flipkart? Create an account
            </Create>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              onChange={(e) => setName(e.target.value)}
              variant="standard"
              label="Enter Name"
            />
            <TextField
              onChange={(e) => setMobile(e.target.value)}
              variant="standard"
              label="Enter Mobile Number"
            />
            <LoginButton onClick={toggleCurrentMode}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
