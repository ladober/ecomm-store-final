import { Card, styled, Grid, Stack } from "@mui/material";
import React from "react";
import { Link, Text } from "../../../components/atoms";
import { ProductCardAction } from "./ProductCardAction";

const StyledImage = styled("img")(() => ({
  marginTop: 50,
  objectFit: "cover",
  width: "100%",
  height: "311px",
  borderRadius: 20,
}));

const StyledCard = styled(Card)(() => ({
  marginTop: 85,
  minWidth: "320px",
  height: 500,
  backgroundColor: "transparent",
  border: "none",
  padding: "24px",
  borderRadius: 20,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "0px 30px 100px rgba(0, 0, 0, 0.2)",
    borderRadius: 20,
  },
}));

export const ProductCard = ({ product }) => {
  const { name, image, brand, category, price } = product;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <StyledCard>
        <Link>
          <StyledImage src={image} alt={`${brand}-${name}`} />
        </Link>

        <Stack direction="row" justifyContent="space-between" mt="29px">
          <Stack spacing={1.5}>
            <Text color="red">{name}</Text>
            <Text color="red">{brand}</Text>
            <Text color="green" fontSize="30px">
              ${price}
            </Text>
          </Stack>
          <ProductCardAction product={product} />
        </Stack>
      </StyledCard>
    </Grid>
  );
};
