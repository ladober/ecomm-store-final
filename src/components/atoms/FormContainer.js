import { FormControl, styled, Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "../../../components/atoms";
import LogoImage from "../../../assets/images/syth-logo.png";

const StylesFormContainer = styled(FormControl)(() => ({
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FormContainer = ({ children }) => {
  return <StylesFormContainer>{children}</StylesFormContainer>;
};

export const FormPageContainer = ({ children }) => {
  return (
    <StyledContainer>
      <Link to="/">
        <img src={LogoImage} alt="site logo" width={150} height={110} />
      </Link>
      <StyledStack>{children}</StyledStack>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px 24px 24px 24px",
  [theme.breakpoints.down("sm")]: {
    padding: "24px 16px",
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: "20px",
  width: 500,
  padding: "12px 12px",
  borderRadius: 16,
  border: "2px solid #FFFFFF",
  backdropFilter: "blur(20px)",
  background: "rgba(255, 255, 255, 0.7)",
  boxShadow: "0px 60px 180px rgba(0,0,0,0.15)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
