import React from "react";
import { useForm, Controller } from "react-hook-form";
import { loginValidationSchema } from "./loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, Input, Button } from "../../../components/atoms";

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data) => {};

  return (
    <div>
      <FormContainer>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const { name, onChange } = field;
            return (
              <Input
                name={name}
                onChange={onChange}
                lable="Email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const { name, onChange } = field;
            return (
              <Input
                type="password"
                name={name}
                onChange={onChange}
                lable="Password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
            );
          }}
        />

        <Button onClick={handleSubmit(onSubmit)} disabled={!isValid}>
          Login
        </Button>
      </FormContainer>
    </div>
  );
};
