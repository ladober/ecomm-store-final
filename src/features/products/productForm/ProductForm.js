import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { productFormValidationSchema } from "./productFormValidation";
import {
  Input,
  Button,
  FormContainer,
  FormPageContainer,
  Text,
} from "../../../components/atoms";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct, setSelectedProduct } from "../../../redux";
import { useProduct } from "../../../hooks";
import { useNavigate } from "react-router-dom";

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

  const { selectedProduct } = useProduct();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(saveProduct({ product: data, productId: selectedProduct?._id }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    if (selectedProduct) {
      const { name, brand, description, price, category, image } =
        selectedProduct;
      setValue("name", name);
      setValue("brand", brand);
      setValue("description", description);
      setValue("price", price);
      setValue("category", category);
      setValue("image", image);
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setSelectedProduct(null));
    };
  }, []);

  return (
    <FormPageContainer isProductForm>
      <Text>Add Product</Text>
      <FormContainer>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <Input
                name={name}
                value={value}
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
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <Input
                name={name}
                value={value}
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
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <Input
                name={name}
                value={value}
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
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <Input
                name={name}
                value={value}
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
          render={({ field }) => {
            const { name, onChange, value } = field;
            return (
              <Input
                type="number"
                name={name}
                value={value}
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
    </FormPageContainer>
  );
};
