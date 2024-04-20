import React from "react";
import { AuthContainer } from "../components/AuthContainer";
import { Stack } from "@mui/material";
import { Text, Snackbar } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { useUser } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux";

export const Login = () => {
  const { error } = useUser();
  const dispatch = useDispatch();

  return (
    <>
      <AuthContainer>
        <Stack>
          <Text>Login</Text>
          <LoginForm />
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
