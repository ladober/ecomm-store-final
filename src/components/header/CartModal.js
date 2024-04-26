import React from "react";
import Modal from "@mui/material/Modal";
import {
  Backdrop,
  Box,
  Chip,
  Divider,
  Fade,
  Stack,
  styled,
} from "@mui/material";
import { Button, Text } from "../atoms";
import { IoIosClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeProductFromCart,
} from "../../redux/slices/cartSlice";

const StyledContainer = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  paddingX: 2,
  paddingY: 2,
}));

const StyledButton = styled(Button)(() => ({
  cursor: "pointer",
  padding: 0,
  minheight: 0,
  minWidth: 0,
  width: "20px",
  outline: "none",
  "&:focus": {
    outline: "none",
  },
}));

const containerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  paddingX: 2,
  paddingY: 2,
};

export const CartModal = ({ open, setOpen, cartItems, totalQuantity }) => {
  const handleClose = () => setOpen(false);

  const totalSum = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={containerStyles}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text variant="h6" fontWeight="medium">
                {totalQuantity} Items in Cart
              </Text>
              <Button onClick={handleClose}>
                <IoIosClose size={30} />
              </Button>
            </Stack>
            <Divider sx={{ mt: 1, mb: 2 }} />
            {cartItems.map((item) => {
              return (
                <ShoppingCartItem
                  key={item.product._id}
                  product={item.product}
                  quantity={item.quantity}
                />
              );
            })}
            <Stack direction="row" justifyContent="space-between">
              <Text fontweigh="bold">Total</Text>
              <Text fontweigh="bold">${totalSum}</Text>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

const ShoppingCartItem = ({ product, quantity }) => {
  const { _id, name, price, image } = product;
  const dispatch = useDispatch();

  console.log(image);
  return (
    <Box>
      <Stack direction="row">
        <img
          scr={image}
          style={{ width: 120, height: 120, borderRadius: 5 }}
          alt=""
        />
        <Stack spacing={2} width="100%" paddingX={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Text fontWeight="400">{name}</Text>
            <Text fontWeight="400" sx={{ marginRight: 1 }}>
              ${price.toFixed(2)}
            </Text>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Chip
                label="In stock"
                color="success"
                sx={{ borderRadius: 1.5, width: 80, height: 30 }}
              />
              <Stack
                direction="row"
                onClick={() => {
                  dispatch(removeProductFromCart(_id));
                }}
              >
                <FaTrashAlt size={20} color="red" />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spasing={0.5}
              sx={{ border: "1px solid yellow", borderRadius: "30px" }}
            >
              <StyledButton
                onClick={() => {
                  dispatch(removeFromCart(_id));
                }}
              >
                -
              </StyledButton>
              <Text>{quantity}</Text>
              <StyledButton
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                +
              </StyledButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 3, mb: 3 }} />
    </Box>
  );
};
