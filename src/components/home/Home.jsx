import { styled, Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Container = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;
