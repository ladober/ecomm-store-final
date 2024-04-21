import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { productFormValidationSchema } from "./productFormValidation";
import { Input, Button, FormContainer } from "../../../components/atoms";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    setValue,
  } = useForm({
    resolver: yupResolver(productFormValidationSchema),
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveProduct({ product: data, productId: null }));
  };

  return (
    <FormContainer>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.name?.message}
              error={Boolean(errors.name)}
              label="Product Name"
            />
          );
        }}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.description?.message}
              error={Boolean(errors.description)}
              label="Product Description"
            />
          );
        }}
      />

      <Controller
        name="brand"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.brand?.message}
              error={Boolean(errors.brand)}
              label="Product Brand"
            />
          );
        }}
      />

      <Controller
        name="category"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              helperText={errors.category?.message}
              error={Boolean(errors.category)}
              label="Product Category"
            />
          );
        }}
      />

      <Controller
        name="price"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              type="number"
              name={name}
              onChange={onChange}
              helperText={errors.price?.message}
              error={Boolean(errors.price)}
              label="Product Price"
            />
          );
        }}
      />

      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setValue("image", base64);
        }}
      />

      <Button onClick={handleSubmit(onSubmit)}>Save Product</Button>
    </FormContainer>
  );
};
