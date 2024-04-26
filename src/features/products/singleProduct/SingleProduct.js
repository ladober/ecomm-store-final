import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/atoms";
import { styled, Stack, Box } from "@mui/material";

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",
  borderRadius: 10,
}));

const Description = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

export const SingleProduct = () => {
  const { id, category } = useParams();
  const { getData, data, loading } = useFetchData();

  useEffect(() => {
    getData(`/products/categories/${category}/${id}`);
  }, [getData, id, category]);

  const { image, name, brand, description } = data?.product || {};
  return (
    <LoadingWrapper isLoading={loading}>
      <Stack direction="row" justifyContent="space-between">
        <StyledImage src={image} alt={`${name}-${brand}`} />
        <Box>
          <Description>
            <Text variant="h4">Product Name</Text>
            <Text variant="h4">{name}</Text>
          </Description>
          <Description>
            <Text variant="h4">Product Brand</Text>
            <Text variant="h4">{brand}</Text>
          </Description>
          <Description>
            <Text variant="h4">Product Description</Text>
            <Text variant="h4">{description}</Text>
          </Description>
        </Box>
      </Stack>
    </LoadingWrapper>
  );
};
