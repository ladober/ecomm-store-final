import { styled, Toolbar, AppBar, Box, Badge, BadgeMark } from "@mui/material";
import React, { useState } from "react";
import { Button, Link } from "../atoms";
import { Searchbar } from "./Searchbar";
import { UserIcon } from "./UserIcon";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { CartModal } from "./CartModal";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../../hooks";
import { ProductCategories } from "./ProductCategories";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "red",
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const cartItemsQuantity = cartItems?.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link style={{ color: "white" }} to="/">
            {t("home")}
          </Link>
          <Searchbar />
          <Button
            onClick={() => {
              setOpen(true);
            }}
            disabled={cartItems.length === 0}
          >
            <Badge badgeContent={cartItemsQuantity} color="primary">
              <BsCart4 size={32} color="yellow" />
            </Badge>
          </Button>
          <UserIcon />
          <LanguageSelect />
        </StyledToolbar>
        <ProductCategories />
        <CartModal
          open={open}
          setOpen={setOpen}
          cartItems={cartItems}
          totalQuantity={cartItemsQuantity}
        />
      </StyledAppBar>
    </Box>
  );
};
