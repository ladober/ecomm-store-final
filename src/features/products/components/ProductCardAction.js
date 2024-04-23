import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers";
import { styled, Stack, Fab, Button } from "@mui/material";
import { Text } from "../../../components/atoms";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";

const StyledFab = styled(Fab)(() => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "green",
  },
}));

export const ProductCardAction = ({ product }) => {
  const { userData } = useUser(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isUserAdmin(userData))
    return (
      <Stack>
        <Button
          onClick={() => {
            dispatch(setSelectedProduct(product));
            navigate(`/products/${product._id}/edit`);
          }}
        >
          Edit
        </Button>
        <Button>Delete</Button>
      </Stack>
    );

  return (
    <StyledFab variant="extended">
      <FaPlus color="white" style={{ marginRight: 6 }} />
      <Text color="white" marginRight="10px">
        add to cart
      </Text>
    </StyledFab>
  );
};
