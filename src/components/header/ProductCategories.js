import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();

  return (
    <List sx={{ display: "flex" }}>
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <Link
            key={_id}
            to={`/products/categories/${name}?sort=price,desc&page=1`}
          >
            <StyledListItem>
              <Text color="aquamarine">{name}</Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
