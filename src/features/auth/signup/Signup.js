import React from "react";
import { Stack } from "@mui/material";
import { Snackbar, Text, FormPageContainer } from "../../../components/atoms";
import { SignupForm } from "./SignupForm";
import { useUser } from "../../../hooks";
import { clearError } from "../../../redux";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const { error } = useUser();
  const dispatch = useDispatch();
  return (
    <FormPageContainer isLoginForm={false}>
      <Stack>
        <Text>Sign up</Text>
        <SignupForm />
      </Stack>

      <Snackbar
        message={error}
        onClose={() => {
          dispatch(clearError());
        }}
        severity="error"
      />
    </FormPageContainer>
  );
};
