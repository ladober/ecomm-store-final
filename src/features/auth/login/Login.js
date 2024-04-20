import React from "react";
import { AuthContainer } from "../components/AuthContainer";
import { Stack } from "@mui/material";
import { Text } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <>
      <AuthContainer>
        <Stack>
          <Text>Login</Text>
          <LoginForm />
        </Stack>
      </AuthContainer>
    </>
  );
};
