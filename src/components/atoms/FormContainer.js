import { FormControl, styled } from "@mui/material";
import React from "react";

const StylesFormContainer = styled(FormControl)(() => ({
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FormContainer = ({ children }) => {
  return <StylesFormContainer>{children}</StylesFormContainer>;
};
