import React from "react";
import { Stack } from "@mui/material";
import { Text, Snackbar, FormPageContainer } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { useUser } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux";

export const Login = () => {
  const { error } = useUser();
  const dispatch = useDispatch();

  return (
    <FormPageContainer isLoginForm={false}>
      <Stack>
        <Text>Login</Text>
        <LoginForm />
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
