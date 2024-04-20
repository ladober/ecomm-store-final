import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidationSchema } from "./signupValidation";
import { FormContainer, Input, Button } from "../../../components/atoms";

export const SignupForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = (data) => {};

  return (
    <FormContainer>
      <Controller
        name="firstName"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="First Name"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          );
        }}
      />

      <Controller
        name="lastName"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Last Name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          );
        }}
      />

      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          );
        }}
      />

      <Controller
        name="password"
        defaultValue=""
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              type="password"
              name={name}
              onChange={onChange}
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          );
        }}
      />

      <Button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
        Sign Up
      </Button>
    </FormContainer>
  );
};
