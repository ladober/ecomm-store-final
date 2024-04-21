import { Card, styled, Grid, Stack, Fab } from "@mui/material";
import React from "react";
import { Link, Text } from "../../../components/atoms";
import { FaPlus } from "react-icons/fa6";

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "311px",
  borderRadius: 20,
}));

const StyledCard = styled(Card)(() => ({
  minWidth: "320px",
  height: 450,
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

const StyledFab = styled(Fab)(() => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "green",
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
          <StyledFab variant="extended">
            <FaPlus color="white" style={{ marginRight: 6 }} />
            <Text color="white" marginRight="10px">
              add to cart
            </Text>
          </StyledFab>
        </Stack>
      </StyledCard>
    </Grid>
  );
};
