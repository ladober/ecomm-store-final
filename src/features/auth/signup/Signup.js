import React from "react";
import { AuthContainer } from "../components/AuthContainer";
import { Stack } from "@mui/material";
import { Text } from "../../../components/atoms";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
  return (
    <div>
      <AuthContainer>
        <Stack>
          <Text>Sign up</Text>
          <SignupForm />
        </Stack>
      </AuthContainer>
    </div>
  );
};
