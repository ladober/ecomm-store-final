import React from "react";
import { AuthContainer } from "../components/AuthContainer";
import { Stack } from "@mui/material";
import { Snackbar, Text } from "../../../components/atoms";
import { SignupForm } from "./SignupForm";
import { useUser } from "../../../hooks";
import { clearError } from "../../../redux";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const { error } = useUser();
  const dispatch = useDispatch();
  return (
    <>
      <AuthContainer>
        <Stack>
          <Text>Sign up</Text>
          <SignupForm />
        </Stack>
      </AuthContainer>
      <Snackbar
        message={error}
        onClose={() => {
          dispatch(clearError());
        }}
        severity="error"
      />
    </>
  );
};
